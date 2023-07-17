// exporto las funciones para utilizarla en auth.routes
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'

export const register = async (req, res) => {
  const {email,password, username} = req.body

  try {
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

export const login = (req, res) => {
  res.send('login')
};