import connection from './connection.js'

export async function wombles() {
  return await connection('wombles').select('*')
}

// export async function getWomble(id) {
//   return connection('wombles')

//     .first()
// }
