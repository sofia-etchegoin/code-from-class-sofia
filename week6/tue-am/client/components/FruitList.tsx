import { getFruit } from '../apiClient/fruit'
import FruitForm from './FruitForm'

import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function FruitList() {
  const { data: fruitList, isError, isLoading } = useQuery({queryKey: ['fruit'], queryFn: getFruit})

  if (isError) {
    return <div>There was an error trying to get your fruit</div>
  }

  if (!fruitList || isLoading) {
    return <div>Loading your fruit</div>
  }

  return (
    <section>
      <h2>Fruit List</h2>
      <ul>
        {
          fruitList.map((fruit) => (
            <li key={fruit.id}>
              <p>
                The fruit <Link to={`/${fruit.id}`}>{fruit.name}</Link> has a rating of {fruit.rating} / 10
              </p>
            </li>
          ))
        }
      </ul>
      <h2>Add a fruit</h2>
      <FruitForm />
    </section>
  )
}
