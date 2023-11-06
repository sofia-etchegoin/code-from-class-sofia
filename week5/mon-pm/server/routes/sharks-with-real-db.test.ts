import {
  describe,
  it,
  expect,
  vi,
  beforeAll,
  beforeEach,
  afterAll,
} from 'vitest'
import server from '../server.ts'
import connection from '../db/connection.ts'
import request from 'supertest'
