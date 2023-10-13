import { describe, test, it, expect } from 'vitest'
import { multiply, multiplySync } from './index.js'

describe('multiplySync', () => {
  it('multiplies two numbers', () => {
    // ARRANGE
    const expected = 18
    // ACT
    const actual = multiplySync(6, 3)
    // ASSERT
    expect(actual).toBe(expected)
  })

  test('multiplying things that are not numbers', () => {
    // let e = undefined
    // try {
    //   multiplySync(null, '4')
    // } catch (err) {
    //   e = err
    // }

    // expect(e).toBeDefined()
    // expect(e.message).toMatchInlineSnapshot('"We only deal in numbers here"')
    const expected = "We only deal in numbers here"

    expect(() => multiplySync(null, '4')).toThrowError(expected)
  })
})

describe('multiply (async)', () => {
  test('multiplying two numbers', async () => {
    // ARRANGE
    const expected = 18
    // ACT
    const actual = await multiply(6, 3)
    // ASSERT
    expect(actual).toBe(expected)
  })

  test('multiplying things that are not numbers', async () => {
    let error = undefined
    try {
      await multiply(null, '4')
    } catch (banana) {
      error = banana
    }
    
    expect(error).toBeDefined()
    expect(error.message).toBe('We only deal in numbers here')
  })

  test('multiplying things that are not numbers (ver 2)', async () => {
    //   await expect(buyApples()).rejects.toThrow('no id')
    await expect(multiply(null, '4')).rejects.toThrow('We only deal in numbers here')
  })
})