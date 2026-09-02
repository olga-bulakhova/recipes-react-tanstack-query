import { Layout } from '@/layout/Layout'
import { Spinner } from '@/shared/components'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const MainPagePage = lazy(() => import('@/pages/MainPage'))
const RecipePage = lazy(() => import('@/pages/RecipePage'))
const MealTypePage = lazy(() => import('@/pages/MealTypePage'))
const TagPage = lazy(() => import('@/pages/TagPage'))

const PageLoader = () => <Spinner fullScreen={true} />

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <MainPagePage />,
			},
			{
				path: '/recipe/:id',
				element: <RecipePage />,
			},
			{
				path: '/meal-type/:type',
				element: <MealTypePage />,
			},
			{
				path: '/tag/:type',
				element: <TagPage />,
			},
		],
	},
])

export const Routing = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<RouterProvider router={router} />
		</Suspense>
	)
}
