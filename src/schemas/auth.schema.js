import {z} from 'zod'; // "z" nos permite dar tipos de datos

export const registerSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required'
    })
    .min(4,{
      message: 'Username must ve least 4 characteres'
    }),
  email: z.
    string({
      required_error: 'Email is required'
    })
    .email({ // va a comprobar que luzca como un email
      message: 'Email is not valid' // En caso de error
    }),
  password: z
    .string({
      required_error: 'Password is required'
    })
    .min(6,{
      message: 'Password must be at least 6 characteres'
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Email is not valid'
    }),
  password: z
    .string({
      required_error: 'Password is required'
    }).min(6, {
      message: 'Password must be at least 6 characters',
    })
});