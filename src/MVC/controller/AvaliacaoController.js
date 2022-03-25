import { AvaliacaoDAO } from "../../DAO/AvaliacaoDAO.js"
export const AvaliacaoController = (app,database) => {
    const avalDAO = new AvaliacaoDAO(database)

    //get all
    app.get('/avaliacao', async (req,res) => { 
        try {
            const allData = await avalDAO.GetAll()
            res.status(200)
            res.json(allData)
            
        } catch (error) {
            res.json(error)
        }
    })
    // insert new 
    app.post('/avaliacao', async (req,res) => { 
        try {
            const insertedData = await avalDAO.InsertAvaliacao(req.body)
            res.status(201)
            res.json(insertedData)
        } catch (error) {
            res.json(error)
        }
    })
    // get by id
    app.get('/avaliacao/:id', async (req,res) => { 
        try {
            const id = req.params.id
            const result = await avalDAO.GetAvaliacao(id)
            res.status(200)
            res.json(result)
        } catch (error) {
            res.status(401)
            res.json(error)
        }

    })
    // update
    app.put('/avaliacao', async (req,res) => { 
        try {
            const object = req.body
            const result = await avalDAO.UpdateAvaliacao(object)
            res.status(200)
            res.json(result)
        } catch (error) {
            res.status(401)
            res.json(error)
        }
    })
    // delete by id
    app.delete('/avaliacao', async (req,res) => { 
        try {
            const id = req.body.id
            const result = await avalDAO.DeleteAvaliacao(id)
            res.status(200)
            res.json(result)
        } catch (error) {
            res.status(401)
            res.json(error)
        }
    })
}