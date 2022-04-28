import db from '../../database/sqlite-db.js'
import { UserModel } from '../../MVC/model/UserModel'
import { UserDAO } from '../../DAO/UserDAO'


const userModel = new UserModel(db)
test('should Register new user', async  () => {
    const newUser = {
        id: 1,
        nome: "Rafael Soares",
        email: "test@test.com",
        senha: '123456'
    }
    const result = await userModel.RegisterUser(newUser)
    expect(result.data[0]).toMatchObject(newUser)
})

test('should Get the user by email and password', async () => {
    const newUser = {
        id: 1,
        nome: "Rafael Soares",
        email: "test@test.com",
        senha: '123456'
    }
    const result  = await userModel.GetUserByEmailAndPassword(newUser)
    expect(result.data[0]).toMatchObject(newUser)
})
test('should Get the user by ID', async () => {
    const newUser = {
        id: 1,
        nome: "Rafael Soares",
        email: "test@test.com",
        senha: '123456'
    }
    const result  = await userModel.GetUserByID(newUser)
    expect(result.data[0]).toMatchObject(newUser)
})