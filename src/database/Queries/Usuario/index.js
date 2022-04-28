
export default  {
    GET_USER_BY_ID: 'SELECT * FROM user WHERE id = $id;',
    GET_USER_BY_EMAIL_SENHA: 'SELECT * FROM user WHERE email = $email AND senha = $senha;',
    REGISTER_NEW_USER: 'INSERT INTO user (nome, email, senha) VALUES ($nome, $email, $senha);',
    GET_LAST_INSERTED_USER:  `SELECT * FROM user ORDER BY id DESC LIMIT 1;`
}