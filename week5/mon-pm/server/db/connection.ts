import knexFile from './knexfile.js'
import knex from 'knex'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
export default knex(knexFile[environment])