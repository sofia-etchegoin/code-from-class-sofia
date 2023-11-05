import React from 'react'
import { SharkFull } from '../../models/shark'

function Shark(props: SharkFull) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Colour: {props.colour}</p>
    </div>
  )
}

export default Shark
