import * as db from './renters.ts'
import connection from './connection.ts'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import { RenterData, Renter } from '../../models/Renter.ts'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

describe('getAllRenters', () => {
  it('gets the complete seed list of movies', async () => {
    const allRenters = await db.getAllRenters()
    expect(allRenters).toHaveLength(7)
  })
})
describe('getRenterById', () => {
  it('gets just renter with Id of 2', async () => {
    const renter = await db.getRenterById(2)
    expect(renter.name).toBe('David Kavenga')
  })
})

describe('addRenter', () => {
  it('adds a renter', async () => {
    // Arrange
    const renterToAdd = {
      name: 'Gerard Paapu',
      phoneNum: '027 444 1111',
      favMovieId: 5,
    } as RenterData

    // Act
    const addedRenter = await db.addRenter(renterToAdd)
    const allRenters = await db.getAllRenters()

    // Assert
    expect(allRenters).toHaveLength(8)
    expect(addedRenter[0]).toEqual({ ...renterToAdd, id: 8 })
  })
})

describe('updateRenter', () => {
  it('should update an existing renter with different details', async () => {
    // Arrange
    const revisedRenter: Renter = {
      id: 1,
      name: 'Jatin Puri',
      phoneNum: '021 555 1234',
      favMovieId: 3,
    }
    const originalRenter = await db.getRenterById(1)

    // Act
    const finalRenterArr = await db.updateRenter(revisedRenter)
    const finalRenter = finalRenterArr[0]

    // Assert
    expect(finalRenter).not.toEqual(originalRenter)
    expect(finalRenter.favMovieId).toBe(revisedRenter.favMovieId)
  })
})

describe('deleteRenter', () => {
  it('should delete a renter by id', async () => {
    await db.deleteRenter(1)
    const allRenters = await db.getAllRenters()

    expect(await db.getRenterById(1)).toBeFalsy()
    expect(allRenters).toHaveLength(6)
  })
})

afterAll(() => {
  return connection.destroy()
})
