import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id // tareas del usuario
  }).populate('user'); //Especifica rutas que deben completarse con otros documentos.
  res.json(tasks)

};

export const createTask = async (req, res) => {
  const {title, description, date} = req.body

  const newTask = new Task({
    title,
    description,
    date, 
    user: req.user.id // El id viene de validateToken
  })

  const savedTask = await newTask.save();
  res.json(savedTask)
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id) // obtenemos el id pasado por url :id
    .populate('user') 

  if (!task) return res.status(404).json({message: 'Task not found'})
  
  res.json(task) // Si se encontro retorna el task
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id) // obtenemos la tarea y la eliminamos

  // Si no se elimino
  if (!task) return res.status(404).json({message: 'Task not found'})
  
  return res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
    // mongoose devuelve el dato anterior
    new: true  // Asignamos que nos devuelva la tarea actualizada
  }) // Se actualiza con los nuevos valores pasados en req.body

  if (!task) return res.status(404).json({message: 'Task not found'})
  res.json(task) // Si se encontro retorna el task
};