import mongoose from "mongoose";

// TASK  => TAREA
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Hace referencia al modelo User
    required: true
  }
},{
  timestamps: true
});

export default mongoose.model('task', taskSchema);