import { useState } from 'react'
interface Props {
  handleAddScare: (newScares: string) => void
}

function SingleInputForm({ handleAddScare }: Props) {
  const [text, setText] = useState('')
  //2. text state needs to change

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setText(event.target.value)
  }
  //3. function to handle change in form
  //4. function to handle submit in form, prevent default and updates the text state, look at conditionals?

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleAddScare(text)
    event.preventDefault()
    setText('')
    // do something with our 'text' state
  }

  //5. set new text
  return (
    <>
      <p>{text}</p>
      <form onSubmit={handleSubmit}>
        <h2>Single Input Form</h2>
        <label htmlFor="new-scare">Scare Name </label>
        <input
          onChange={handleChange}
          value={text}
          type="text"
          name="new-scare"
          id="new-scare"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SingleInputForm
