import { AvaliacaoModel } from "../model/AvaliacaoModel.js"
export const AvaliacaoController = (app,database) => {
    const avalModel = new AvaliacaoModel(database)

    //get all
    app.get('/avaliacao', async (req,res) => { 
        try {
            const allData = await avalModel.GetAll()
            res.status(200)
            res.json(allData)
            
        } catch (error) {
            res.json(error)
        }
    })
    // insert new 
    app.post('/avaliacao', async (req,res) => { 
        try {
            const insertedData = await avalModel.InsertAvaliacao(req.body)
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
            const result = await avalModel.GetAvaliacao(id)
            res.status(200)
            res.json(result)
        } catch (error) {
            res.status(401)
            res.json(error)
        }

    })
    // update
    app.put('/avaliacao/:id', async (req,res) => { 
        try {
            const id = req.params.id
            const object = req.body
            const result = await avalModel.UpdateAvaliacao(object, id)
            res.status(200)
            res.json(result)
        } catch (error) {
            res.status(401)
            res.json(error)
        }
    })
    // delete by id
    app.delete('/avaliacao/:id', async (req,res) => { 
        try {
            const id = req.params.id
            const result = await avalModel.DeleteAvaliacao(id)
            res.status(200)
            res.json(result)
        } catch (error) {
            res.status(401)
            res.json(error)
        }
    })
}