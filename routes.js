import express from 'express'

const routes = express.Router()

let nomes = ['noabe', 'erlyson', 'nicolas',]

routes.get('/nomes/:nome',(req,res)=>{
    const {nome} = req.params
    if(nome == nomes.find(item => item === nome)){
        return res.status(200).json(`${nome} está na lista`)
    }
    else{
        return res.status(500).json(`${nome} não está na lista`)
    }
})

export default routes