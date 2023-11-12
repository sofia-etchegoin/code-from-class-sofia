import { createRoot } from 'react-dom/client'

import { routes } from './routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(<RouterProvider router={router} />)
