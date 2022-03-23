import express from 'express'
import { AvaliacaoController } from './MVC/controller/AvaliacaoController.js'
import database from './database/sqlite-db.js'
const app = express()

app.use(express.json())

AvaliacaoController(app,database)

export default app