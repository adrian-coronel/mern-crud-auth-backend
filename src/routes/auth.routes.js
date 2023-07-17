// Utilizamos el enrutador de express
import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

const router = Router()


router.post('/register', register)
router.post('/login', login)

// exportamos las rutas para añadirlas a la app
export default router