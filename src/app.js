import express from 'express'
import { AvaliacaoController } from './MVC/controller/AvaliacaoController.js'
const app = express()

app.use(express.json())

AvaliacaoController(app)

app.use((req, res, next) =>  { 

})

AvaliacaoController(app)

export default app