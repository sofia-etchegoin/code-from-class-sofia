// @vitest-environment jsdom
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Counter from '../Counter'

// npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

describe('<Counter>', () => {
  it('should increment by 1 when the user clicks the button', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    expect(screen.getByText(/count is 0/i)).toBeInTheDocument()
    expect(screen.queryByText(/count is 1/i)).toBeNull()

    const button = screen.getByRole('button', { name: /up/i })

    await user.click(button)

    expect(screen.queryByText(/count is 0/i)).toBeNull()
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument()
  })

  it('should increment by 1 every time the user clicks the button', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    expect(screen.getByText(/count is 0/i)).toBeInTheDocument()
    expect(screen.queryByText(/count is 1/i)).toBeNull()

    const button = screen.getByRole('button', { name: /up/i })

    await user.click(button)

    expect(screen.queryByText(/count is 0/i)).toBeNull()
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument()

    await user.click(button)
    expect(screen.getByText(/count is 2/i)).toBeInTheDocument()

    await user.click(button)
    expect(screen.getByText(/count is 3/i)).toBeInTheDocument()

    await user.click(button)
    expect(screen.getByText(/count is 4/i)).toBeInTheDocument()

    await user.click(button)
    expect(screen.getByText(/count is 5/i)).toBeInTheDocument()
  })
  it('should increment by 10 when the user updates the input to 10 and clicks the button', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    expect(screen.getByText(/count is 0/i)).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /up/i })
    const input = screen.getByRole('spinbutton')

    await user.clear(input)
    await user.type(input, '10')
    await user.click(button)

    expect(screen.getByText(/count is 10/i)).toBeInTheDocument()
  })
})
