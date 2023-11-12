import { useEffect, useState } from 'react'
import { getSharks } from '../apiClient/sharks'

import { type Shark } from '../../models/shark'

export default function Sharks() {
  const [sharks, setSharks] = useState<Shark[]>([])

  useEffect(() => {
    async function fetchSharks() {
      const response = await getSharks()
      setSharks(response)
    }

    fetchSharks()
  }, [])

  return (
    <section>
      <h2>Sharks</h2>
      <ul>
        {sharks.map((shark) => (
          <li key={shark.id}>
            <p>
              {shark.name} is{' '}
              <span
                style={{
                  backgroundColor: shark.colour,
                  paddingInline: '0.5rem',
                }}
              >
                {shark.colour}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
