import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { Talk } from '../../models/Talk'

import { getTalks, addTalk }  from '../apiClient'

const initialTalks = [] as Talk[]

const initialFormData = {
  speaker: '',
  topic: ''
}

export default function App() {
  const [talks, setTalks] = useState(initialTalks as Talk[])
  const [form, setForm] = useState(initialFormData)

  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function fetchTalks() {
        const dbTalks = await getTalks()
        setTalks(dbTalks)
      }
      fetchTalks()
    } catch(error) {
      console.log(error)
    }
  }, [])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const addedTalk = await addTalk(form)
    setTalks([...talks, addedTalk])
    setForm(initialFormData)
  }

  return (
    <main>
      <h1>Lightning Talks!</h1>

      <ul>
        {talks.map(({ id, topic, speaker }) => {
          return <li key={id}> {topic} ({speaker}) </li>
        })}
      </ul>

      <br />
      <br />

      <h1>Add new talk</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="speaker">Speaker:</label><br />
          <input
            id="speaker"
            onChange={handleChange}
            value={form.speaker}
            name="speaker"
          />
        </p>

        <p>
          <label htmlFor="topic">Topic:</label><br />
          <input
            id="topic"
            onChange={handleChange}
            value={form.topic}
            name="topic"
          />
        </p>

        <button>Add talk</button>
      </form>
    </main>
  )
}
