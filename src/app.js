import express from 'express'
import { router } from '../routes/home.js'


const app = express()

app.use(express.json())

app.use(router)

app.listen(3333, ()=>
console.log('Servidor funcionando porta: http://localhost:3333/'))