import { beforeEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react'

// This sets up our jest-dom assertions like: .toBeVisible() and .toBeInTheDocument()
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

// this includes the types to make typescript happy about those same
// assertions/matchers
import '@testing-library/jest-dom/vitest'

// this keeps our DOM clean for each test
beforeEach(cleanup)
