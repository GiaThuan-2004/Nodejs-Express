import getConnection from "config/database"
import { IUser } from "src/types/global";

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
    const connection = await getConnection();

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

const deleteUserApi = async (id: string) => {
    const connection = await getConnection();

    try {
        const sql = 'DELETE FROM `users` WHERE `id` = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err)
    }
}

const detailUserApi = async (id: string) => {
    const connection = await getConnection();

    try {
        const sql = 'SELECT * FROM `users` WHERE `id` = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err)
    }
}

const updateUserApi = async (user: IUser) => {
    const connection = await getConnection();
    try {
        const sql = 'UPDATE `users` SET `name` = ?, `email` = ?, address = ? WHERE `id` = ? LIMIT 1';
        const values = [user.name, user.address, user.address, user.id];

        console.log(values)

        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err)
    }
}


export { createUserService, getAllUserService, deleteUserApi, detailUserApi, updateUserApi }