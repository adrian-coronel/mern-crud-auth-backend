import mongoose from "mongoose";

// Schema al ejecutarse nos da un Objeto que representa lo que se guarda en MONGODB
const userSchema = new mongoose.Schema({
  username: { 
    type: String,
    required: true, // obliga a guardar un valor en este campo
    trim: true, // quita los espacios de incio y fin antes de ser guardados
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
},{
  timestamps: true, // añade dos campos: createAt y updateAt
  versionKey: false // no añada un campo --v, creado por default por mongoose
})

// Utilizamos el modelo de mongoose, para poder utilizar los metodos CRUD de mongodb
// Schema nos sirve para definir como deben lucir los objetos antes de ser guardados
export default mongoose.model('User', userSchema)