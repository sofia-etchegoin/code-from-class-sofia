import { Link, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
      <h1>Mutations with React Query</h1>
      <nav>
        <Link to='/'>
          <p>Home</p>
        </Link>
      </nav>
      <Outlet />
    </div>
  )
}
