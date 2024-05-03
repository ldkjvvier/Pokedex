import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { PokemonProvider } from './context/PokemonProvider.tsx'
import { router } from './routes.tsx'
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
	<React.StrictMode>
		<PokemonProvider>
			<RouterProvider router={router} />
		</PokemonProvider>
	</React.StrictMode>
)
