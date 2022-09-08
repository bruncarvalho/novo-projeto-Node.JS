import {response, Router} from "express"

const router = Router()

router.get('/', (req, res)=>{
  res.send('<h1>Página Inicial 💁‍♀️</h1>')
})

router.get('/sobre', (require, response)=>{
  response.json('<h1>Estudando de programação 💻</h1>')
})

router.get('/dados', (require, response)=>{
 return response.json({
    nome: 'Bruna',
    idade: 34,
    Cidade: 'Juiz de Fora/MG'
  })
})

export{router}