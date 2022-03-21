import aval from "../database/CRUD/Avaliacao"
import AvaliacaoModel from '../MVC/model/AvaliacaoModel.js'

export default class Avaliacao {
    constructor(db){
        this.db = db
        
    }

    InsertAvaliacao(data = {}){ 
        const avalicao = new AvaliacaoModel(data)
        return this._SetterHelper(() => aval.INSERT_AVALIACAO(data), [...data])
    }

    UpdateAvaliacao(data = {}){ 
        return this._SetterHelper(() => aval.UPDATE_AVALIACAO(data), [...data])
        
    }
    DeleteAvaliacao(id){
        return this._SetterHelper(() => aval.DELETE_AVALIACAO, [id])
    }

    GetAvaliacao(id) {
        return new Promise((resolve,reject)=> { 
            try {
                this.db.get(aval.GET_AVALIACAO , id,(error, row) => { 
                    if(error) throw new Error(error)
                    resolve()
                })
            } catch (error) {
                console.error(error)
                reject()
            }
        })
    }
    GetAll() { 
        return new Promise((resolve,reject)=> { 
            try {
                this.db.all(aval.GET_ALL , (error, row) => { 
                    if(error) throw new Error(error)
                    resolve()
                })
            } catch (error) {
                console.error(error)
                reject()
            }
        })
    }
    
    _SetterHelper(callbackQuery, data=[]) {
        return new Promise((resolve,reject)=> { 
            try {
                this.db.run(callbackQuery(), [...data] , (error) => { 
                    if(error) throw new Error(error)
                    resolve()
                })
            } catch (error) {
                console.error(error)
                reject()
            }
        })
    }

}