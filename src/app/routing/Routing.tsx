import { Layout } from '@/layout/Layout'
import { Spinner } from '@/shared/components'

import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const MainPagePage = lazy(() => import('@/pages/MainPage'))

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
