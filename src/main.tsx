import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const root = ReactDOM.createRoot(document.getElementById('root')!)
const queryClient = new QueryClient()
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
)
