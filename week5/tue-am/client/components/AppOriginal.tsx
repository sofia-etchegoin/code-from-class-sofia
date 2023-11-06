import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import request from 'superagent'
import { Talk } from '../../models/Talk'

const initialTalks = [] as Talk[]

const initialFormData = {
  speaker: '',
  topic: ''
}

export default function AppOriginal() {
  const [talks, setTalks] = useState(initialTalks as Talk[])
  const [form, setForm] = useState(initialFormData)
  // console.log('render')

  // useEffect(() => {
  //   console.log('this runs every render')
  // })

  // useEffect(() => {
  //   console.log('this runs every time the speaker is updated')
  // }, [form.speaker])

  useEffect(() => {
    try {
      async function fetchTalks() {
        const dbTalks = await request.get('/api/v1/talks')
        // console.log(dbTalks.body.talks)
        setTalks(dbTalks.body.talks)
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
    const addedTalk = await request.post('/api/v1/talks').send({newTalk: form})
    console.log(addedTalk)
    setTalks([...talks, addedTalk.body.talk])
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
