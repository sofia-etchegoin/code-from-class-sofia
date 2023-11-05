import React, { useState } from 'react'

function SharkForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    colour: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.submitShark(formData)
    setFormData({
      name: '',
      colour: '',
    })
  }

  return (
    <form>
      <h1>Add a new shark:</h1>
      <p>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
        ></input>
      </p>
      <p>
        <label htmlFor="colour">Colour: </label>
        <input
          name="colour"
          onChange={handleChange}
          value={formData.colour}
        ></input>
      </p>
      <button onClick={handleSubmit}>Save new shark</button>
    </form>
  )
}

export default SharkForm
