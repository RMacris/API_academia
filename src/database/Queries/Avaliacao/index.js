function formatKeysToNames(data = { }) {
    const keys = Object.keys(data)
    const res = keys.map(el => el.replace("$", ""))
    return res

}
export default { 
    INSERT_AVALIACAO: function(data = {}){
        const {$id, ...newData} = data
        let currentData = ($id == null) ? newData : data
        const keys = formatKeysToNames(currentData)
        let query = `INSERT INTO avaliacao (`
        for(let index in keys) {
            if(index < keys.length -1) {
                query += `${keys[index]},`
                continue  
            } 
            query += `${keys[index]}`
        }
        query += `) VALUES (`
        for(let index in keys) {
            if(index < keys.length -1) {
                query += `$${keys[index]},`
                continue  
            } 
            query += `$${keys[index]}`
        }
        query += `);`
        
        return query
    },
    GET_ALL: "SELECT * FROM avaliacao;",
    GET_AVALIACAO: `SELECT * FROM avaliacao WHERE id=$id;`,
    UPDATE_AVALIACAO_BY_ID: function(data = {}){
        let query = `UPDATE avaliacao SET `
        let {$id, $createdAt, $user_id, ...newData} = data
        const keys = formatKeysToNames(newData)
        for(let index in keys){
            if(index < keys.length -1) {
                query += ` ${keys[index]} = $${keys[index]},`
                continue  
            } 
            query += ` ${keys[index]} = $${keys[index]} `
        }
        query += `WHERE id=$id;`
        return query
    },
    GET_LAST: `SELECT * FROM avaliacao ORDER BY id DESC LIMIT 1;`,
    DELETE_AVALIACAO: `DELETE FROM avaliacao WHERE id = $id`,
    GET_ALL_AVALIACAO_USER: `
        SELECT avaliacao.* FROM avaliacao
        INNER JOIN user ON user.id = avaliacao.user_id 
        WHERE avaliacao.user_id = $user_id 
        `,
    GET_LAST_AVALIACAO_USER: `
        SELECT avaliacao.* FROM avaliacao 
        INNER JOIN user ON user.id = avaliacao.user_id
        WHERE avaliacao.user_id = $user_id 
        ORDER BY avaliacao.id DESC LIMIT 1
        `,
    
}