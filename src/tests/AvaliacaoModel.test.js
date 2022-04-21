import db from '../database/sqlite-db'
import { AvaliacaoModel } from '../MVC/model/AvaliacaoModel'

const data = { 
    altura         : 183.32, 
    peso           : 80.32, 
    massaMuscular  : 24.0401230,
    taxaGordura    : 18.0556,
    ombros         : 19.9022 ,
    tricipal       : 9.3,
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
    gluteo         : 0.0
}

const checker = {
   id             : 1,
   altura         : 183.32, 
   peso           : 80.32 , 
   massaMuscular  : 24.04 ,
   ombros         : 19.9 ,
   taxaGordura    : 18.06 ,
   tricipal       : 9.30  ,
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
   gluteo         : 0.00
}
const avaliacao = new AvaliacaoModel(db)
const avalData = {...data}


test('Expect to return inserted avaliacao in the database', async () => { 
    const expected = await avaliacao.InsertAvaliacao(avalData)
    const expectedRes = avaliacao._ResponseDefault([checker],null)
    return expect(expected).toMatchObject(expectedRes)
})

test('expect to return row with the especified id',async  () => { 
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
test('expect to delete the avaliacao with the especified id', async () => { 
    const expectedRes = avaliacao._ResponseDefault([],null)
    return expect(await avaliacao.DeleteAvaliacao(1)).toMatchObject(expectedRes)

})


