import getConnection from "config/database"

const createUserService = async (email: string, name: string, address: string) => {
    const connection = await getConnection();

    try {
        const sql = 'INSERT INTO `users`(`name`, `email`, address) VALUES (?, ?, ?)';
        const values = [name, email, address];

        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err)
    }
}

const getAllUserService = async () => {
    const connection = await getConnection()

    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users`'
        );
        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export { createUserService, getAllUserService }