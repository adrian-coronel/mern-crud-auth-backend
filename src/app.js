// CODIGO DE EXPRESS
import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'

// servidor
const app = express()

app.use(morgan('dev')) // morgan mostrará mensaje corto por consola
app.use(authRoutes)

export default app