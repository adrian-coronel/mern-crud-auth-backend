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