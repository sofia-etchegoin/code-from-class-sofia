import { useState } from 'react'
// import SingleInputForm from './SingleInputForm'
// import ScaresList from './ScaresList'
import MultiInputForms from './MultiInputForm'

function Main() {
  // const scares = [
  //   'ghosts',
  //   'overdue emails',
  //   'driving behind log trucks like the one in final destination',
  // ]

  // const [scares, setScares] = useState([
  //   'ghosts',
  //   'overdue emails',
  //   'driving behind log trucks like the one in final destination',
  // ])

  // 1. change to changable state variable
  // 2. a function that handles a new scare and adds a scare to the animal array

  // const handleAddScare = (newScares: string) => {
  //   setScares([...scares, newScares])
  // }
  // 3. pass function down as props to form

  // const [showForm, setShowForm] = useState(false)

  // const handleShowForm = () => {
  //   setShowForm(!showForm)
  // }

  const [showMultiForm, setShowMultiForm] = useState(false)
  const handleShowMultiForm = () => {
    setShowMultiForm(!showMultiForm)
  }

  return (
    <section className="home">
      {/* <ScaresList scares={scares} />
      <div>
        <button onClick={handleShowForm}>
          {showForm ? 'Hide Form' : 'Add Scare'}
        </button>
        {showForm && <SingleInputForm handleAddScare={handleAddScare} />}
      </div> */}
      <div>
        <button onClick={handleShowMultiForm}>
          {showMultiForm ? 'Hide Form' : 'Rate Scare'}
        </button>
        {showMultiForm && <MultiInputForms />}
      </div>
    </section>
  )
}

export default Main
