import mongoose from "mongoose";

const MONGODB_ATLAS_URI = 'mongodb+srv://adriancoronel:miryam2003@cluster-auth.mki8ad4.mongodb.net/mern-crud-auth?retryWrites=true&w=majority';

export const connectDB = async () => {  
  await mongoose.connect(MONGODB_ATLAS_URI,{
    useNewUrlParser: true, // Analiza correctamente la cadena de conexión
    useUnifiedTopology: true, // abilita el nuevo motor de topología unificada para la conexión.
  })
  .then(db => console.log('>>> db is connected'))
  .catch(err => console.log(err))
}