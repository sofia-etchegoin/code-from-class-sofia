import { useParams } from 'react-router'
import { getFruitById} from '../apiClient/fruit'
import { useQuery } from '@tanstack/react-query'

export default function FruitDetails() {
  const { fruitId } = useParams()

  const {data: fruitDetails, isError, isLoading} = useQuery(['fruits', fruitId], () => getFruitById(fruitId as string))

  if (isError) {
    return <div>There was an error trying to get your fruit</div>
  }

  if (!fruitDetails || isLoading) {
    return <div>Loading your fruit</div>
  }

  return (
    <section>
      <h2>Fruit</h2>
      <p>
        ID: {fruitDetails.id}
      </p>
      <p>
        Name: {fruitDetails.name}
      </p>
      <p>
        Rating: {fruitDetails.rating} / 10
      </p>
    </section>
  )
}
