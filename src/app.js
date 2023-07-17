// CODIGO DE EXPRESS
import express from 'express'
import morgan from 'morgan'

// servidor
const app = express()

app.use(morgan('dev')) // morgan mostrará mensaje corto por consola

export default app