import { useEffect, useState } from 'react'
import { getSharks } from '../apiClient/sharks'
import { useQuery } from '@tanstack/react-query'

import { type Shark } from '../../models/shark'

export default function Sharks() {
  // const [sharks, setSharks] = useState<Shark[]>([])

  // useEffect(() => {
  //   async function fetchSharks() {
  //     const response = await getSharks()
  //     setSharks(response)
  //   }

  //   fetchSharks()
  // }, [])

  // const queryResponse = useQuery({ queryKey: ['sharks'], queryFn: getSharks })
  const {
    data: sharks,
    error,
    isLoading,
  } = useQuery({ queryKey: ['sharks'], queryFn: getSharks })

  if (error) {
    return <p>Whoops! {error.message}</p>
  }
  if (!sharks || isLoading) {
    return <p>Still loading&hellip;</p>
  }

  return (
    <section>
      <h2>Sharks</h2>
      <ul>
        {/* role: list */}
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
