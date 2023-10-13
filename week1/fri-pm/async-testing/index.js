export async function multiply(a, b) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   throw new Error('We only deal in numbers here')
  // }
  
  return a * b
}

export function multiplySync(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('We only deal in numbers here')
  }
  
  return a * b
}