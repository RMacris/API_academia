/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from 'sqlite3'
sqlite3.verbose()
// Serve para fixar um caminho do meu database
import { dirname } from'path'
import { fileURLToPath } from 'url'

import * as Schema from './Schema/index.js'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.sqlite3'

// Criando o arquivo e/ou abrindo a "conexão" do meu database
const db = new sqlite3.Database(filePath);



export function CreateTable(table) {
    db.run(table, (error)=> {
        try {
            if (error) throw new Error(error)
        }catch(error) { 
            console.error("Erro ao criar tabela \n" + table, error);
        }
    });
    
}


db.serialize( ()=> {

    let keys = Object.keys(Schema.default)
    for(let key of keys){ 
        CreateTable(Schema.default[key])
    }
});

export default db