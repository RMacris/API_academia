import db from '../database/sqlite-db'
import { AvaliacaoModel } from '../MVC/model/AvaliacaoModel'

const data = { 
    altura         : 183.32, 
    peso           : 80.32, 
    massaMuscular  : 24.0401230,
    taxaGordura    : 18.0556,
    ombrosE        : 19.9022 ,
    ombrosD        : 17.92342,
    tricipalE      : 9.3,
    tricipalD      : 9.3,
    peitoral       : 10.23,
    cintura        : 32.8546,
    quadril        : 50.654,
    bracoE         : 60.645,
    bracoD         : 70.6234,
    pernaE         : 67.023423623467234356,
    pernaD         : 84.345,
    panturrilhaE   : 63.4325,
    panturrilhaD   : 43.0,
    abdomem        : 23.0,
    gluteo         : 0.0,
    user_id        : 1
}

const checker = {
   id             : 1,
   altura         : 183.32, 
   peso           : 80.32 , 
   massaMuscular  : 24.04 ,
   ombrosE        : 19.9 ,
   ombrosD        : 17.92 ,
   taxaGordura    : 18.06 ,
   tricipalE      : 9.30  ,
   tricipalD      : 9.30  ,
   peitoral       : 10.23 ,
   cintura        : 32.85 ,
   quadril        : 50.65 ,
   bracoE         : 60.65 ,
   bracoD         : 70.62 ,
   pernaE         : 67.02 ,
   pernaD         : 84.34 ,
   panturrilhaE   : 63.43 ,
   panturrilhaD   : 43.00 ,
   abdomem        : 23.00 ,
   gluteo         : 0.00,
   user_id        : 1

}
const avaliacao = new AvaliacaoModel(db)
const avalData = {...data}


test('Expect to return inserted avaliacao in the database', async () => { 
    const expected = await avaliacao.InsertAvaliacao(avalData)
    const expectedRes = avaliacao._ResponseDefault([checker],null)
    return expect(expected).toMatchObject(expectedRes)
})

test('expect to return row with the especified id', async  () => { 
    const expectedRes = avaliacao._ResponseDefault([checker],null)
    return expect(await avaliacao.GetAvaliacao(1)).toMatchObject(expectedRes)
})

test('expect to get Updated row ',async () => {
    const updater = { 
        altura: 4,
        peso: 4,
        id:1
    }
    const updated = Object.assign(checker,{altura: 4,
        peso: 4,
        id:1})
    const expectedRes = avaliacao._ResponseDefault([updated],null)
    const result = await avaliacao.UpdateAvaliacao(updater, updater.id)
    return expect(result).toMatchObject(expectedRes)
})


// Get avaliacao related to user 
test('expect to return All user avaliacao', async () => { 
    const user  = { 
        id: 1
    }
    const expectRes = await avaliacao.GetAllAvaliacaoUser(user.id)
    expect(expectRes.data.length).toBeTruthy()

})


test('expect to delete the avaliacao with the especified id', async () => { 
    const expectedRes = avaliacao._ResponseDefault([],null)
    return expect(await avaliacao.DeleteAvaliacao(1)).toMatchObject(expectedRes)

})


