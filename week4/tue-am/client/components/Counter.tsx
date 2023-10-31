/* eslint-disable prefer-const */
import { useState } from 'react'

export default function Counter() {
  // let count = 0
  // const [value, setValue] = useState(initialValue)
  const [count, setCount] = useState(0)
  const [incNum, setIncNum] = useState(1)
  console.log('Counter is re-rendering')
  function handleClick() {
    // console.log('clickety click click')
    setCount((prevCount) => prevCount + incNum)
    // setCount(5)
    // setCount((prevCount) => prevCount + 1)
    // setCount(count + 1)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIncNum(event.target.valueAsNumber)
  }
  return (
    <div>
      <h2>Counter</h2>
      <p>The count is {count}</p>
      <button onClick={handleClick}>Up!</button>
      <input type="number" id="input" value={incNum} onChange={handleChange} />
    </div>
  )
}
