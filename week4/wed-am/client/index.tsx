import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'

// import { router } from './router'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <App />
    // <RouterProvider router={router} />
  )
})
