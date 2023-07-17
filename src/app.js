// CODIGO DE EXPRESS
import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'

// servidor
const app = express()

app.use(morgan('dev')) // morgan mostrará mensaje corto por consola
app.use(express.json()) // permito que express entienda JSON
app.use('/api',authRoutes) // nuestras rutas comenzarán por '/api'

export default app