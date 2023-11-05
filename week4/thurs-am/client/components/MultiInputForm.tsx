import { useState } from 'react'

function MultiInputForms() {
  // const scares = [
  //   {
  //     name: 'spiders',
  //     rating: '5',
  //     origin: 'nightmare',
  //     lastScare: 'all the time',
  //   },
  //   {
  //     name: 'aliens',
  //     rating: '2.56',
  //     origin: 'space ~ proxima cent',
  //     lastScare: '1945',
  //   },
  // ]

  const [scares, setScares] = useState([
    {
      name: 'spiders',
      rating: '5',
      origin: 'nightmare',
      lastScare: 'all the time',
    },
    {
      name: 'aliens',
      rating: '2.56',
      origin: 'space ~ proxima cent',
      lastScare: '1945',
    },
  ])

  // 2. create state for newScares

  const [newScare, setNewScare] = useState({
    name: '',
    rating: '',
    origin: '',
    lastScare: '',
  })

  // 3. handle type function create const for key and new StateObject (copt newScare add key and value pair) and setNewScare to state obj

  const handleChange = (evt) => {
    const key = evt.target.id

    const stateObj = {
      ...newScare,
      [key]: evt.target.value,
    }

    setNewScare(stateObj)
  }

  // 4. handle submit should prevent default set scares to copy scares and add newScare and reset newScares

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setScares([...scares, newScare])
    setNewScare({
      name: '',
      rating: '',
      origin: '',
      lastScare: '',
    })
  }

  // add onchange and values for each field on form

  return (
    <>
      <h3>Roa&apos;s Rated Sssscares:</h3>
      <ul>
        {scares.map((s) => (
          <li key={s.name}>
            NAME: {s.name}, RATING: {s.rating} on the boo scale, ORIGIN:{' '}
            {s.origin}, LAST SCARE: {s.lastScare}
          </li>
        ))}
      </ul>
      <div>
        <h2>Multiple Input Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="name">Name:</label>
            <input
              value={newScare.name}
              onChange={handleChange}
              type="text"
              id="name"
            />
          </div>

          <div className="form-input">
            <label htmlFor="rating">Rating:</label>
            <input
              value={newScare.rating}
              onChange={handleChange}
              type="text"
              id="rating"
            />
          </div>

          <div className="form-input">
            <label htmlFor="lastScare">Last Scare</label>
            <input
              value={newScare.lastScare}
              onChange={handleChange}
              type="text"
              id="lastScare"
            />
          </div>

          <div className="form-input">
            <label htmlFor="origin">Country of origin:</label>
            <input
              value={newScare.origin}
              onChange={handleChange}
              type="text"
              id="origin"
            />
          </div>

          <button>Save</button>
        </form>
      </div>
    </>
  )
}

export default MultiInputForms

// Gaby's Cheat Sheet

// const handleType = (evt: ChangeEvent<HTMLInputElement>) => {
//   const key = evt.target.id
//   const newState = {
//     ...newScare,
//     [key]: evt.target.value
//   }

//   setNewFruit(newState)
// }

// const handleSubmit = (evt: FormEvent) => {
//   evt.preventDefault()
//   setScares([ ...scares, newScare])

//   setNewScares({
//     name: '',
//     rating: '',
//     origin: '',
//     lastScare: '',
//   })
// }

// onChange={handleType} value={newScares.name}
// onChange={handleType} value={newScares.name}