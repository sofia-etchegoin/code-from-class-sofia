import { useState, useEffect } from 'react'
import { getSharks, postShark } from '../apiClient.ts'

import { SharkData } from '../../models/shark.ts'
import Shark from './Shark.tsx'
import SharkForm from './SharkForm.tsx'

function App() {
  const [sharks, setSharks] = useState([])

  useEffect(() => {
    async function loadSharks() {
      const sharksArray = await getSharks()
      setSharks(sharksArray)
    }
    loadSharks()
  }, [])

  const submitShark = async (shark: SharkData) => {
    try {
      const newShark = await postShark(shark)
      setSharks([...sharks, newShark])
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h1>Shark family!</h1>
      {sharks.map((shark) => (
        <Shark key={shark.id} name={shark.name} colour={shark.colour} />
      ))}
      <br />
      <SharkForm submitShark={submitShark} />
    </div>
  )
}

export default App
