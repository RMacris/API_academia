import app from "./app.js"
const port = 8080

app.listen(port ,()=> { 
    console.log('listening the server', `http://localhost:${port}`)
})  