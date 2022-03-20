export default { 
    GET_ALL: "SELECT * FROM avaliacao;",
    GET_AVALIACAO: `SELECT * FROM avaliacao where id=?;`,
    UPDATE_AVALIACAO: function(keys = []){
        const query = `UPDATE avaliacao`
        keys.forEach(element => {
            query += ` SET ${element} = ? `
        })
        query += `WHERE id=?;`
        return query
    },
    DELETE_AVALIACAO: `DELETE FROM avaliacao WHERE id = ?`

    
}