import express from 'express'
import database from './database/sqlite-db.js'
const app = express()

app.use(express.json())


app.use((req, res, next) =>  { 

})

export default app