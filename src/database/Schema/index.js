

export default {
    /*  Future Integration
    USUARIOS_SCHEMA: `
    CREATE TABLE IF NOT EXISTS "PESSOA" (
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "NOME" varchar(64) NOT NULL,
        "EMAIL" varchar(64) NOT NULL,
        "TELEFONE" varchar(13) NOT NULL,
        "RG" varchar(8) UNIQUE,
        "CPF" varchar(11) UNIQUE NOT NULL

    );`,
    TAREFAS_SCHEMA: `
    CREATE TABLE IF NOT EXISTS "TAREFAS" (
        ID INTEGER PRIMARY KEY AUTOINCREMENT, 
        TITULO VARCHAR(64),
        DESCRICAO TEXT,
        STATUS VARCHAR(32),
        DATACRIACAO VARCHAR(32),
        ID_USUARIO INTEGER,
        FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOD(ID)
    );`,
    */
    AVALIACAO_SCHEMA: `CREATE TABLE IF NOT EXISTS "AVALIACAO" (
        id INTEGER PRIMARY KEY NOT NULL,
        altura DECIMAL(3,2),
        peso DECIMAL(3,2),
        massaMuscular DECIMAL(3,2),
        ombrosE DECIMAL(3,2),
        ombrosD DECIMAL(3,2),
        taxaGordura DECIMAL(3,2),
        tricipalE DECIMAL(3,2),
        tricipalD DECIMAL(3,2),
        peitoral DECIMAL(3,2),
        cintura DECIMAL(3,2),
        quadril DECIMAL(3,2),
        bracoE DECIMAL(3,2),
        bracoD DECIMAL(3,2),
        pernaE DECIMAL(3,2),
        pernaD DECIMAL(3,2),
        panturrilhaE DECIMAL(3,2),
        panturrilhaD DECIMAL(3,2),
        abdomem DECIMAL(3,2),
        gluteo DECIMAL(3,2),
        user_id INTEGER,
        createdAt TEXT,
        updatedAt TEXT
    );`,
}
