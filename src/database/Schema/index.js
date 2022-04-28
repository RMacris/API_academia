

export default {
    USUARIOS_SCHEMA: `
    CREATE TABLE IF NOT EXISTS "USER" (
        id INTEGER PRIMARY KEY NOT NULL,
        nome varchar(64) NOT NULL,
        email varchar(64) UNIQUE NOT NULL,
        senha varchar(64) NOT NULL
    );`,
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
