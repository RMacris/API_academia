
export class UserDAO { 
    constructor(user = {id: 0, nome: '', email: '', senha: ''}) { 
        this.$id = user.id
        this.$nome = user.nome
        this.$email = user.email
        this.$senha = user.senha
    }
}   