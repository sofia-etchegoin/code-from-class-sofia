// My code is Bug type. It's not very effective.

import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(<App />)
