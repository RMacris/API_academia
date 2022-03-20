
import db from "./create.js"
// Esse comando serve para fechar nosso banco de dados
// quando encerramos nosso servidor
process.on('SIGINT', () =>
    db.close(() => {
        console.log(' BD encerrado!');
        process.exit(0);
    })
);

// Aqui exportamos nosso banco de dados para ser usado na aplicação toda
export default db