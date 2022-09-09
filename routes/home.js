import {Router} from "express"

const router = Router()



router.post('/apipost', (request, response)=>{
  const { namePessoa, agePessoa } = request.body
  const pessoa = {
    name: namePessoa,
    age: agePessoa
  } 
  return response.json(pessoa)
} )


router.get('/api', (request, response)=>
  response.json({
    messege: 'Alô'
  })
)

export{router}