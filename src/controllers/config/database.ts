import mysql from 'mysql2/promise';

const getConnection = async () => {
    const connection = await mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'thuan2004',
        database: 'nodejsdatabase',
    });

    return connection;
}

export default getConnection