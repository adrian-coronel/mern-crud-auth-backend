// CODIGO DE EXPRESS
import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'

// servidor
const app = express()

app.use(cors({ // Permito solicitudes solo de este dominio
  origin: 'http://localhost:5173'
}));
app.use(morgan('dev')) // morgan mostrará mensaje corto por consola
app.use(express.json()) // permito que express entienda JSON
app.use(cookieParser())

app.use('/api',authRoutes) // nuestras rutas comenzarán por '/api'
app.use('/api',tasksRoutes)

export default app