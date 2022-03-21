import AvaliacaoDAO from './avaliacao'
import AvaliacaoModel from '../MVC/model/AvaliacaoModel';
import db from '../database/sqlite-db'



const data = { 
    altura         : 183.32, 
    peso           : 80.32, 
    massaMuscular  : 24.0401230,
    taxaGordura    : 18.0556,
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
    altura         : 183.32, 
    peso           : 80.32 , 
    massaMuscular  : 24.04 ,
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
const avaliacaoData = new AvaliacaoModel(data)
const avaliacao = new AvaliacaoDAO(db)
test('Expect to insert avaliacao in the database', () => { 
    return expect(avaliacao.InsertAvaliacao(avaliacaoData)).toMatchObject(checker)
})

test('Expect to be undefined if empty db', () => {
    return expect(avaliacao.GetAll()).resolves.toBe(avaliacaoData);
});

test('expect to return at a row with the especified id', () => { 
    return expect(avaliacao.GetAvaliacao(1)).toMatchObject({})
})

test('expect to delete the avaliacao with the especified id', () => { 
    return expect(avaliacao.DeleteAvaliacao(1)).toMatchObject({})
})

test('expect to get the avaliacao with the especified id ', () => { 
    return expect(avaliacao.GetAvaliacao(1)).toMatchObject({})
})
