import { useState } from 'react'
import SingleInputForm from './SingleInputForm'
import ScaresList from './ScaresList'
// import MultiInputForms from './MultiInputForm'

function Main() {
  const scares = [
    'ghosts',
    'overdue emails',
    'driving behind log trucks like the one in final destination',
  ]
  // change to changable state variable
  // a function that handles a new scare and adds a scare to the animal array
  // pass function down as props to form

  const [showSingleForm, setShowSingleForm] = useState(false)

  const handleShowForm = () => {
    setShowSingleForm(!showSingleForm)
  }

  // const [showMultiForm, setShowMultiForm] = useState(false)
  // const handleShowMultiForm = () => {
  //   setShowMultiForm(!showMultiForm)
  // }

  return (
    <section className="home">
      <ScaresList scares={scares} />
      <div>
        <button onClick={handleShowForm}>
          {showSingleForm ? 'Hide Form' : 'Add Scare'}
        </button>
        {showSingleForm && <SingleInputForm />}
      </div>
      {/* <div>
        <button onClick={handleShowMultiForm}>
          {showMultiForm ? 'Hide Form' : 'Rate Scare'}
        </button>
        {showMultiForm && <MultiInputForms />}
      </div> */}
    </section>
  )
}

export default Main
