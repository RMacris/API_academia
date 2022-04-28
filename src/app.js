import express from 'express'
import { AvaliacaoController } from './MVC/controller/AvaliacaoController.js'
import database from './database/sqlite-db.js'
import cors from 'cors'
const app = express()

app.use(cors())

app.use(express.json())

AvaliacaoController(app,database)
AvaliacaoController(app,database)


export default app