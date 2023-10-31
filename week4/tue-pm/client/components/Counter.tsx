import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)

  function handleClick() {
    setCount(count + increment)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const number = event.target.valueAsNumber

    // if the value is not a number (empty/they used letters)
    if (isNaN(number)) {
      setIncrement(0)
    } else {
      setIncrement(event.target.valueAsNumber)
    }
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>The count is {count}</p>
      <button onClick={handleClick}>Up!</button>
      <input
        type='number'
        id='input'
        value={increment}
        onChange={handleChange}
      />
    </div>
  )
}
