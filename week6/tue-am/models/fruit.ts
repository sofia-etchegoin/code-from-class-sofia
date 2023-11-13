// A fruit that has been inserted into the database
export interface Fruit {
  id: number
  name: string
  rating: string
}

// A fruit that hasn't been inserted into the database
export interface FruitData {
  name: string
  rating: string
}
