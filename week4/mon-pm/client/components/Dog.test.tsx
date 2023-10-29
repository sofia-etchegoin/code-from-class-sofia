// @vitest-environment jsdom
import { describe, it, beforeEach, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

// This sets up our jest-dom assertions like: .toBeVisible() and .toBeInTheDocument()
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

// this includes the types to make typescript happy about those same
// assertions/matchers
import '@testing-library/jest-dom/vitest'

// this keeps our DOM clean for each test
beforeEach(cleanup)

import Dog from './Dog.tsx'

describe('<Dog />', () => {
  it("renders a the dog's name", () => {
    render(<Dog name="Fido" breed="plain" superpower="flying" />)

    const name = screen.getByText('Fido')
    expect(name).toBeVisible()
  })
})
