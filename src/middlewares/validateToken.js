import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => { // Necesia estos 3 parametros para considerarse un middleware
  const {token} = req.cookies // Extraemos el token del cookie
  
  // status 401: no authorizate
  if (!token) return res.status(401).json({message: 'No token, authorization denied'});

  // Verifica si el token de la cookie contiene la firma
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({message: 'Invalid token'});
    
    req.user = user
    
    next()
  })

}