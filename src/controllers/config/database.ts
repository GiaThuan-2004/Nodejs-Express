import mysql from 'mysql2/promise';

const getConnection = async () => {
    const connection = await mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'thuan2004',
        database: 'nodejsdatabase',
    });

    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users`'
        );

        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
    }
}

export default getConnection