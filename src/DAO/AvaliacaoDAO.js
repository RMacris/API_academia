import aval from "../database/Queries/Avaliacao/index.js"
import { AvaliacaoModel } from '../MVC/model/AvaliacaoModel.js'

export class AvaliacaoDAO {
    constructor(db){
        this.db = db
    }

    InsertAvaliacao(data = {}){
        const {$id, ...newData} = new AvaliacaoModel(data)
        data = new AvaliacaoModel(data)
        let currentData = newData
        return this._SetterHelper(() => aval.INSERT_AVALIACAO(currentData), currentData)
    }

    async UpdateAvaliacao(data = {}){
        const currentData = await this.GetAvaliacao(data.id)
        const targetData = Object.assign(currentData.data[0],data)
        const dataModel = new AvaliacaoModel(targetData)
        const finalModel = {...dataModel}
        return await this._SetterHelper(() => aval.UPDATE_AVALIACAO_BY_ID(finalModel), finalModel)
        
    }
    DeleteAvaliacao(id){
        return this._SetterHelper(() => aval.DELETE_AVALIACAO, {$id:id})
    }

    GetAvaliacao(id) {
       return this._GetterHelper(() => aval.GET_AVALIACAO, {$id:id})
    }
    GetAll() { 
        return this._GetterHelper(() => aval.GET_ALL, {})
    }
    async GetLast() {
        const res = await this._GetterHelper(() => aval.GET_LAST,{})
        if(res.data.length > 0 && res.data[0].hasOwnProperty('id')) return this._ResponseDefault([res.data[0]],res.error)
        return this._ResponseDefault([],res.error)
    }
    
    _SetterHelper(callbackQuery, data={}) {
        return new Promise((resolve,reject)=> { 
            try {
                this.db.run(callbackQuery() , data, async  (error) => {
                    if(error) throw new Error(error)
                    const modified = (data.hasOwnProperty('$id')) ? await this.GetAvaliacao(data.$id) : await this.GetLast()
                    if(modified == null) return resolve(this._ResponseDefault(modified.data,modified.error))
                    resolve(this._ResponseDefault(modified.data,error))
                })
            } catch (error) {
                reject(this._ResponseDefault([], error))
            }
        })
    }
    _GetterHelper(callbackQuery, data={}) {
        return new Promise((resolve,reject)=> { 
            try {
                this.db.all(callbackQuery(), data , (error, row) => { 
                    if(error) throw new Error(error)
                    resolve(this._ResponseDefault(row, error))
                })
            } catch (error) {
                reject(this._ResponseDefault([], error))
            }
        })
    }
    _ResponseDefault(data, error) {
        return { 
            data: data || [],
            error: error || null
        }
    }
}