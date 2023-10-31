import { Link } from 'react-router-dom'

import birdFamilyData from '../../data/birdFamilies'

export default function Nav() {
  return (
    <nav>
      <h2>Nav</h2>
      <ul>
        <li key='item'>
          <Link to='/info'>Info</Link>

        </li>
        {/* <li><a href='/'>Home</a></li> */}
        {
          Object.keys(birdFamilyData).map(birdFam => {
            return <li key={birdFam}><Link to={`/birdFamily/${birdFam}`}>{birdFam}</Link></li>
          })
        }
      </ul>
    </nav>
  )
}
