import app from "./app.js"
const port = 3000

app.listen(port ,()=> { 
    console.log('listening the server', `http://localhost:${port}`)
})  