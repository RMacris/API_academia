import res from "express/lib/response";
import { UserDAO } from "../../DAO/UserDAO";

import queries  from '../../database/Queries/Usuario/index'

export class UserModel  {
    constructor(db){
        this.db = db
    }
    
    GetUserByEmailAndPassword(data = {}) {
        const userData = new UserDAO({...data})
        return new Promise((resolve, reject) => { 
            try {
                this.db.all(queries.GET_USER_BY_ID, {$id: userData.$id}, (error,row) => {
                    if(error) throw new Error(error)
                    resolve (this._ResponseDefault(row, error))

                })
            } catch (error) {
                console.error(error)
                reject(this._ResponseDefault([], error))
            }

        })
    }
    GetUserByID(data = {}) {
        const userData = new UserDAO({...data})
        return new Promise((resolve, reject) => { 
            try {
                this.db.all(queries.GET_USER_BY_ID, {$id: userData.$id}, (error,row) => {
                    if(error) throw new Error(error)
                    resolve (this._ResponseDefault(row, error))

                })
            } catch (error) {
                console.error(error)
                reject(this._ResponseDefault([], error))
            }
        })
    }
    _GetLastInsertedUser() { 
        return new Promise((resolve, reject)=> {
            try {
                this.db.all(queries.GET_LAST_INSERTED_USER, (error, row) => { 
                    if(error) throw new Error(error)
                    resolve(this._ResponseDefault(row, error ))
                })
            } catch (error) {
                console.error(error)
                reject(this._ResponseDefault([], error))
            }
         })
    }
    async RegisterUser(data = {})  {
        const {$id, ...userData} = new UserDAO({...data})
        return new Promise((resolve, reject)=> { 
            try {
                this.db.run(queries.REGISTER_NEW_USER, userData, async (error) => { 
                    if(error) throw new Error(error)
                    const user = await this._GetLastInsertedUser()
                    console.warn(user)
                    resolve(this._ResponseDefault(user.data, user.error))
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