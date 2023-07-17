import {TOKEN_SECRET} from '../config.js'
import jwt from 'jsonwebtoken'

export function createAccessToken(payload){
  // utilizamos una promesa para describirla con async await
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload, // objeto/cadena con los datos
      TOKEN_SECRET, // clave secreta para cifrar/descifrar el token
      { // Opciones
        expiresIn: "1d"
      },
      (err, token) => {
        if (err) reject(err) // if
        resolve(token) // else
      }
    )
  })
}