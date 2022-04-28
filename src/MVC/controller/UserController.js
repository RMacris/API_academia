import { UserModel } from "../model/UserModel";

export const UserController = (app,database) => {
    const userModel = new UserModel(database)

    app.get('/signUp', async (req,res) => {
        const userData = req.body
        try {
            const allData = await userModel.RegisterUser(userData)
            res.status(201)
            res.json(allData)
            
        } catch (error) {
            res.json(error)
        }
    })
    
    app.get('/signIn', async (req,res) => { 
        const userData = req.body
        try {
            const allData = await userModel.GetUserByEmailAndPassword(userData)
            res.status(200)
            res.json(allData)
            
        } catch (error) {
            res.json(error)
        }
    })
    app.get('/user/:id', async (req,res) => { 
        const userId = req.params.id
        
        try {
            const allData = await userModel.GetUserByID({id: userData})
            res.status(200)
            res.json(allData)
            
        } catch (error) {
            res.json(error)
        }
    })

}
const userModel = new UserModel()