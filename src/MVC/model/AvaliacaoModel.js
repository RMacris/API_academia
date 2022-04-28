import aval from "../../database/Queries/Avaliacao/index.js"
import { AvaliacaoDAO } from '../../DAO/AvaliacaoDAO.js'

export class AvaliacaoModel {
    constructor(db){
        this.db = db
    }

    InsertAvaliacao(data = {}){
        const {$id, ...newData} = new AvaliacaoDAO(data)
        const currentData = newData
        return this._SetterHelper(() => aval.INSERT_AVALIACAO(currentData), currentData)
    }

    async UpdateAvaliacao(data = {}, id = 0){
        const currentData = await this.GetAvaliacao(id)
        const targetData = Object.assign(currentData.data[0],{...data})
        const dataModel = new AvaliacaoDAO(targetData)
        const { $user_id, $createdAt, ...finalModel} =  {...dataModel}
        return await this._SetterHelper(() => aval.UPDATE_AVALIACAO_BY_ID(finalModel), finalModel)
        
    }
    DeleteAvaliacao(id) {
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

    GetLastAvaliacaoUser (user_id = 0)  {
        return this._GetterHelper(() => aval.GET_LAST_AVALIACAO_USER, {$user_id: user_id})
    }
    GetAllAvaliacaoUser (user_id = 0)  {
        return this._GetterHelper(() => aval.GET_ALL_AVALIACAO_USER, {$user_id: user_id})
    }
    _SetterHelper(callbackQuery, data={}) {
        const newData = {...data}
        return new Promise((resolve,reject)=> { 
            try {
                this.db.run(callbackQuery() , newData, async  (error) => {
                    if(error) throw new Error(error)
                    const modified = (newData.hasOwnProperty('$id')) ? await this.GetAvaliacao(newData.$id) : await this.GetLast()
                    if(modified == null) return resolve(this._ResponseDefault(modified.data,modified.error))
                    resolve(this._ResponseDefault(modified.data,error))
                })
            } catch (error) {
                console.error(error)
                reject(this._ResponseDefault([], error))
            }
        })
    }
    _GetterHelper(callbackQuery, data={}) {
        const newData = {...data}
        return new Promise((resolve,reject)=> { 
            try {
                this.db.all(callbackQuery(), newData, (error, row) => { 
                    if(error) throw new Error(error)
                    resolve(this._ResponseDefault(row, error))
                })
            } catch (error) {
                console.error(error)
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