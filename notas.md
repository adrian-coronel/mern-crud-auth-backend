## CREANDO Y CONFIGURANDO

Al momento de ejecutar "node src/app.js" nos sale un error de que node no reconoce la palabra "import" al momento de importar express -> import express from 'express'

> Entonces para poder utilizar IMPORT debemos de definir el "type" como tipo "module" en el package.json -> "type": "module",

## INSTALL NODEMON: $ npm i nodemon -D

## INSTALL MORGAN: $ npm i morgan
> Permite visualizar por consola las peticiones que llegan al backend

## MONGOOSE: $ npm i mongoose
> Es un modulo que permite conectarte a mongodb, pero también nos permite validar los datos antes de que sean guardados

## BYCRIPTJS: $ npm i bcryptjs
> Permitirá hashear las contraseas en cadenas largas para mentenerlas ocultas

## JSON WEB TOKEN: $ npm i jsonwebtoken
> Permitirá generar un token que permitirá validar si un usuario ya fue registrado

## MIDDLEWARE
> Para controlar el acceso a las rutas, usaremos el middleware validateToken para validar si el usuario ya está authenticado, ya que estas se ejecutan antes de llegar a una ruta.

## COOKIE-PARSER: $ npm i cookie-parser
> Nos permite añadir un middleware que cada vez que llegue una cookie lo convertirá en objeto JSON

## ZOD: $ npm i zod
> https://zod.dev/
> Zod es una biblioteca de declaración y validación de esquemas de TypeScript. Estoy usando el término "esquema" para referirme ampliamente a cualquier tipo de datos, desde un stringobjeto anidado simple hasta uno complejo. (POR EJEMPLO, VALIDARÁ SI UN OBJETO LLEGA CON UN CAMPO EMAIL/PASSWORD, EL TIPO DE DATO, UN MAXIMO/MINIMO)

## CORS: $ npm i cors
> Cors(Access-Control-Allow-Origin) es un mecanismo o política de seguridad que permite controlar las peticiones HTTP asíncronas que se pueden realizar desde un navegador a un servidor con un dominio diferente de la página cargada originalmente.