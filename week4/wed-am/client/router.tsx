import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
// import Home from './components/Home'
// import Info from './components/Info'
// import Cats from './components/Cats'
// import Dogs from './components/Dogs'
// import BirdFamily from './components/BirdFamily'
// import NotFound from './components/NotFound'

export const routes = createRoutesFromElements(
  <Route path='/' element={<App />}>

  </Route>
)

export const router = createBrowserRouter(routes)
