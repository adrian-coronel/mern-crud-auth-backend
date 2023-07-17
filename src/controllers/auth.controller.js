// exporto las funciones para utilizarla en auth.routes
import User from '../models/user.model.js'

export const register = async (req, res) => {
  const {email,password, username} = req.body

  try {
    // guarda los campos especificados y el id
    const newUser = new User({
      username,
      email,
      password
    });

    // aqui recién se agregan el createAt y updateAt 
    const userSaved = await newUser.save(); // guardamos el usuario
    res.json(userSaved)
    
  } catch (error) {
    console.log(error)  
  }

};

export const login = (req, res) => {
  res.send('login')
};