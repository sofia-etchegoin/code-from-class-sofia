// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '../test-setup.tsx'

import Dog from './Dog.tsx'
// Unit test: testing one component in isolation

describe('<Dog />', () => {
  it("renders a the dog's name", () => {
    // ARRANGE
    render(
      <Dog
        text="Some text for example"
        name="Fido"
        breed="plain"
        superpower="flying"
      />
    )

    // ACT
    // Fake an event or something

    // ASSERT
    const name = screen.getByText('Fido')
    expect(name).toBeVisible()
  })

  it('renders a heading for the text prop', () => {
    render(
      <Dog
        name="doggo"
        breed="dog"
        superpower="dog stuff"
        text="hello i am dog"
      />
    )

    const name = screen.getByRole('heading', { level: 4 })
    expect(name).toHaveTextContent('hello i am dog')
  })
})
