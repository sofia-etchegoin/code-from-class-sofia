export interface RenterData {
  name: string
  phoneNum: string
  favMovieId: number
}

export interface Renter extends RenterData {
  id: number
}
