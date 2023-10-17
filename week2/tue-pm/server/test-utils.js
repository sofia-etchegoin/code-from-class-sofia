import { within } from '@testing-library/dom'
import { JSDOM } from 'jsdom'

export function render(response) {
  const text = response.text
  const virtualDOM = new JSDOM(text)
  const document = virtualDOM.window.document

  // within wraps our JSDOM with @testing-library selectors
  // https://testing-library.com/docs/queries/about
  const screen = within(document)
  return screen
}
