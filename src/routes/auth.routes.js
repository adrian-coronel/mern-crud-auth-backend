// Utilizamos el enrutador de express
import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { 
  login,
  register, 
  logout, 
  profile 
} from "../controllers/auth.controller.js";


const router = Router()


router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.get('/profile', authRequired, profile);

// exportamos las rutas para añadirlas a la app
export default router