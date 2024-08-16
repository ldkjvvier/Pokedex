import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes.tsx'
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
const root = ReactDOM.createRoot(document.getElementById('root')!)
const queryClient = new QueryClient()
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppRoutes />
		</QueryClientProvider>
	</React.StrictMode>
)
