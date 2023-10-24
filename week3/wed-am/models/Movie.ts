export interface MovieData {
  title: string
  year: number
}

export interface Movie extends MovieData {
  id: number
}
