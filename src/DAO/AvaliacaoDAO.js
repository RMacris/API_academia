import aval from "../database/Queries/Avaliacao"
import AvaliacaoModel from '../MVC/model/AvaliacaoModel.js'

export class AvaliacaoDAO {
    constructor(db){
        this.db = db
    }

    InsertAvaliacao(data = {}){
        const {$id, ...newData} = data
        let currentData = ($id == null) ? newData : data
        return this._SetterHelper(() => aval.INSERT_AVALIACAO(currentData), currentData)
    }

    UpdateAvaliacao(data = {}){
        const {$id, ...newData} = data
        let currentData = ($id == null) ? newData : data
        return this._SetterHelper(() => aval.UPDATE_AVALIACAO_BY_ID(currentData), currentData)
        
    }
    DeleteAvaliacao(id){
        return this._SetterHelper(() => aval.DELETE_AVALIACAO, {$id:id})
    }

    GetAvaliacao(id) {
       return this._GetterHelper(() => aval.GET_AVALIACAO, {$id:id})
    }
    GetAll() { 
        return this._GetterHelper(() => aval.GET_AVALIACAO, {})
    }
   async GetLast() {
        const res = await this._GetterHelper(() => aval.GET_LAST,{})
        if(res.data.length > 0 && res.data[0].hasOwnProperty('id')) return this._ResponseDefault([res.data[0]],res.error)
        return this._ResponseDefault([{}],res.error)
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
                reject(this._ResponseDefault([{}], error))
            }
        })
    }
    _GetterHelper(callbackQuery, data={}) {
        return new Promise((resolve,reject)=> { 
            try {
                this.db.all(callbackQuery(), data , (error, row) => { 
                    resolve(this._ResponseDefault(row, error))
                })
            } catch (error) {
                reject(this._ResponseDefault([{}], error))
            }
        })
    }
    _ResponseDefault(data, error) {
        return { 
            data: data || [{}],
            error: error || null
        }
    }
}