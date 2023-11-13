import { ChangeEvent, FormEvent, useState } from 'react'
import { FruitData, Fruit } from '../../models/fruit'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addFruit } from '../apiClient/fruit'

const initialFormData = {
  name: '',
  rating: ''
}

export default function FruitForm() {
  const [form, setForm] = useState<FruitData>(initialFormData)
  const queryClient = useQueryClient()

  const fruitMutation = useMutation(addFruit, {
    onSuccess: async (newFruit) => {
      const currentFruits: Fruit[] | undefined = queryClient.getQueryData(['fruit'])
      if(currentFruits) {
        queryClient.setQueryData(['fruit'], [...currentFruits, newFruit])
      } else {
        queryClient.invalidateQueries(['fruit'])
      }
    }
  })


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    fruitMutation.mutate(form)
    setForm(initialFormData)
  }

  if (fruitMutation.isLoading) {
    return <div>Adding your fruit</div>
  }
  return (
    <form onSubmit={handleSubmit} aria-label="Add Fruit Form">
      <p>
        <label htmlFor="name">Name:</label><br />
        <input
          id="name"
          onChange={handleChange}
          value={form.name}
          name="name"
        />
      </p>

      <p>
        <label htmlFor="rating">Rating:</label><br />
        <input
          id="rating"
          onChange={handleChange}
          value={form.rating}
          name="rating"
        />
      </p>

      <button>Add Fruit</button>
    </form>
  )
}
