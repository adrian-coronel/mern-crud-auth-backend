
export const validateSchema = (schema) => (req, res, next) => {
  try {
    // Va a comparar la estructura de schema esperado
    schema.parse(req.body) // parse()  ejecuta la validación del schema
    next()
  } catch (error) {
    return res
      .status(400)
      // Mapeamos el error de zod para solo ver el mensaje de error
      .json(error.errors.map((error) => error.message))
  }
}