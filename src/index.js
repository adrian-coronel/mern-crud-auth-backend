// AQUI SE ARRANCARÁ LA APLICACIÓN
import app from './app.js'
import {connectDB} from './db.js';

const port = 3000;

connectDB() // Primero se conectará  a la DB
app.listen(port)
console.log(`Server on port ${port}`);