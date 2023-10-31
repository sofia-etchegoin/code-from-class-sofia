import { Outlet } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

export default function App() {
  return (
    <>
      <div className='title'>
        <img 
          src='/images/sirocco.jpg' 
          alt='sirocco bird'
        />
        <h1>My favourite native birds</h1>
      </div>

      <div className='main'>
        <Nav />
        {/* <Home /> */}
        <Outlet />
      </div>
    </>
  )
}
