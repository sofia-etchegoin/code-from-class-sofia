import { Link, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
      <h1>Consuming APIs with React Query ⚡️🐭</h1>
      <nav>
        <ul>
          <li>
            <Link to="pokemon">to Pokémon</Link>
          </li>
          <li>
            <Link to="sharks">to Sharks</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
