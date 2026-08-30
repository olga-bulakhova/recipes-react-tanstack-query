import '@/app/styles/fonts.css'
import '@/app/styles/variables.css'
import '@/app/styles/reset.css'
import '@/app/styles/global.css'

import { createRoot } from 'react-dom/client'

import App from '../App'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../query-client/query-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<App />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
)
