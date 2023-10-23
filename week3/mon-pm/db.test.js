import * as db from './db.js'
describe('getAllJars', () => {
  it('gets the complete seed list of jars', async () => {
    const allJars = await db.getAllJars()
    expect(allJars).toHaveLength(3)
  })
})
