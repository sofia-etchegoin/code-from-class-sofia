import { useState } from 'react'

function MultiInputForms() {
  const [scares, setScares] = useState([
    {
      name: 'spiders',
      rating: '5',
      origin: 'nightmare',
      lastScare: 'all the time',
    },
  ])

  // const [newScare, setNewScare] = useState({
  //   name: '',
  //   rating: '',
  //   origin: '',
  //   lastScare: '',
  // })

  // const handleType = (evt) => {
  //   console.log(evt.target.id, evt.target.value)
  // }

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  // }

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
        <form>
          <div className="form-input">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>

          <div className="form-input">
            <label htmlFor="rating">Rating:</label>
            <input type="text" id="rating" />
          </div>

          <div className="form-input">
            <label htmlFor="lastScare">Last Scare</label>
            <input type="text" id="lastScare" />
          </div>

          <div className="form-input">
            <label htmlFor="origin">Country of origin:</label>
            <input type="text" id="origin" />
          </div>

          <button>Save</button>
        </form>
      </div>
    </>
  )
}

export default MultiInputForms
