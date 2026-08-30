import axios from 'axios'
import { toast } from 'react-toastify'

export interface JsonApiError {
	status: string
	code?: string | number
	title?: string
	detail?: string
	source?: { pointer?: string; parameter?: string }
	meta?: Record<string, unknown>
}

export interface JsonApiErrorDocument {
	errors: JsonApiError[]
	meta?: Record<string, unknown>
}

export type ExtractError<T> = T extends { error?: infer E } ? E : unknown

/**
 * Проверяет, содержит ли переданный объект (или ответ Axios) структуру JSON:API Error Document
 */
export function isJsonApiErrorDocument(error: unknown): error is JsonApiErrorDocument {
	// Если это ошибка Axios, проверяем тело ответа (error.response.data)
	if (axios.isAxiosError(error)) {
		const data = error.response?.data
		return typeof data === 'object' && data !== null && 'errors' in data && Array.isArray(data.errors)
	}

	// Обычная проверка для сырого объекта данных
	return typeof error === 'object' && error !== null && 'errors' in error && Array.isArray(error.errors)
}

/**
 * Разбирает документ ошибок JSON:API и разделяет их на ошибки полей (валидация) и глобальные ошибки
 */
export function parseJsonApiErrors(error: unknown): {
	fieldErrors: Record<string, string>
	globalErrors: string[]
} {
	const fieldErrors: Record<string, string> = {}
	const globalErrors: string[] = []

	// Извлекаем сам документ ошибок в зависимости от того, пришел AxiosError или сырой объект
	let errorDoc: JsonApiErrorDocument | null = null

	if (axios.isAxiosError(error) && error.response?.data) {
		errorDoc = error.response.data as JsonApiErrorDocument
	} else if (isJsonApiErrorDocument(error)) {
		errorDoc = error
	}

	// Если документ ошибок найден, парсим его стандартным образом
	if (errorDoc && Array.isArray(errorDoc.errors)) {
		for (const err of errorDoc.errors) {
			const msg = err.detail ?? err.title ?? 'Unknown error'
			const ptr = err.source?.pointer
			if (ptr) {
				// Убираем префикс JSON:API (/data/attributes/email -> email)
				const field = ptr.replace(/^\/data\/attributes\//, '')
				fieldErrors[field] = msg
			} else {
				globalErrors.push(msg)
			}
		}
	}

	return { fieldErrors, globalErrors }
}

/**
 * Главная функция-обработчик для Axios, возвращающая текстовое описание ошибки
 * (Совместима с вашей предыдущей логикой)
 */
export const handleApiError = (error: unknown, defaultMessage: string = 'Ошибка сети'): string => {
	// 1. Проверяем, является ли это структурированной ошибкой спецификации JSON:API
	if (isJsonApiErrorDocument(error)) {
		const { fieldErrors, globalErrors } = parseJsonApiErrors(error)

		// Если есть глобальные ошибки, возвращаем первую из них
		if (globalErrors.length > 0) return globalErrors[0]

		// Если глобальных нет, но есть ошибки валидации полей, собираем их в строку
		const fields = Object.keys(fieldErrors)
		if (fields.length > 0) {
			return `Ошибка в полях: ${fields.map(field => `${field} (${fieldErrors[field]})`).join(', ')}`
		}
	}

	// 2. Если это стандартная ошибка Axios (без структуры JSON:API)
	if (axios.isAxiosError(error)) {
		if (error.response) {
			return `Ошибка сервера (${error.response.status}): ${error.message}`
		}
		if (error.request) {
			return 'Сетевая ошибка: сервер не отвечает. Проверьте интернет-соединение.'
		}
		return `Ошибка настройки запроса: ${error.message}`
	}

	// 3. Стандартная ошибка JavaScript
	if (error instanceof Error) {
		return `Системная ошибка: ${error.message}`
	}

	return defaultMessage
}

export const showApiError = (error: unknown, defaultMessage?: string): void => {
	const msg = handleApiError(error, defaultMessage)
	toast(msg)
}
