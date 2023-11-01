import { useState } from 'react'

// 1. add Interface
function Multi() {
  const [scares, setScares] = useState([
    {
      name: 'spiders',
      rating: '5',
      origin: 'nightmare',
      lastScare: 'all the time',
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

  const handleType = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.id, evt.target.value)

    const key = evt.target.id

    const stateObject = {
      ...newScare,
      [key]: evt.target.value,
    }
    setNewScare(stateObject)
  }

  // 4. handle submit should prevent default set scares to copy scares and add newScare and reset newScares

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
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
            {s.name} ({s.rating} on the boo scale)
          </li>
        ))}
      </ul>
      <div>
        <h2>Multiple Input Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleType}
              value={newScare.name}
              type="text"
              id="name"
            />
          </div>

          <div className="form-input">
            <label htmlFor="rating">Rating:</label>
            <input
              onChange={handleType}
              value={newScare.rating}
              type="text"
              id="rating"
            />
          </div>

          <div className="form-input">
            <label htmlFor="lastScare">Last Scare</label>
            <input
              onChange={handleType}
              value={newScare.lastScare}
              type="text"
              id="lastScare"
            />
          </div>

          <div className="form-input">
            <label htmlFor="origin">Country of origin:</label>
            <input
              onChange={handleType}
              value={newScare.origin}
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

export default Multi

// Gaby's Cheat Sheet

// interface Fruit {
//   name: string
//   rating: number
//   origin: string
//   season: string
// }
////

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
