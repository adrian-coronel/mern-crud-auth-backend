// exporto las funciones para utilizarla en auth.routes
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js';


export const register = async (req, res) => {
  const {email,password, username} = req.body

  try {
    // Validamos si el usuario(email) ya existe
    const userFound = await User.findOne({email});
    if(userFound) return res.status(400).json(['The email already in use'])

    // Genera asincrónicamente un hash para la cadena dada.
    const passwordHash = await bcrypt.hash(password,10)

    // guarda los campos especificados y el id
    const newUser = new User({
      username,
      email,
      password: passwordHash
    });

    // aqui recién se agregan el createAt y updateAt 
    const userSaved = await newUser.save(); // guardamos el usuario
    const token = await createAccessToken({id: userSaved._id})
    res.cookie('token',token) // metodo de express para crear un cookie
    res.json({
      _id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    })


  } catch (error) {
    res.status(500).json({ message: error.message })
  }

};

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    // Buscamos si el user existe
    const userFound = await User.findOne({email});

    // En caso el usuario no se encuentre en DB
    if (!userFound) return res.status(400).json({message: 'User not found'})

    // Si existe, se compará contraseñas
    const isMatch = await bcrypt.compare(password, userFound.password)

    // Si la contraseña ingresada es incorrecta
    if (!isMatch) return res.status(400).json({message: 'Invalid credentials'})

    // Crea un token con el ID del usuario encontrado
    const token = await createAccessToken({id: userFound._id})
    res.cookie('token',token) // metodo de express para crear un cookie
    res.json({
      _id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt
    })


  } catch (error) {
    res.status(500).json({ message: error.message })
  }

};

export const logout = (req, res) => {
  // El token con el nombre "token" tendrá un valor vacio y expirá en un tiempo de 0
  res.cookie('token', '',{
    expires: new Date(0)
  });
  return res.sendStatus(200);
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  
  if (!userFound) return res.status(400).json({message: 'User not found'})

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  })
}

export const verifyToken = async (req, res) => {
  // El usuario enviará su token para comprobar que esta authentificado
  const { token } = req.cookies

  if (!token) return res.status(401).json({message: 'Unauthorized'})

  // Verificamos el token usando la firma(clave secreta) lo que retorna un callback con el user o un error
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if(err) return res.status(401).json({message: 'Unauthorized'});

    const userFound = await User.findById(user.id)

    // En caso el token fue valido, pero no se encontro el usuario
    if (!userFound) return res.status(401).json({message: 'Unauthorized'});

    return res.json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
    })
  })
}