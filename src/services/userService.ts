import { prisma } from "config/client";
import getConnection from "config/database"
import { IUser } from "src/types/global";


const createUserService = async (email: string, name: string, address: string) => {
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            address: address
        }
    })

    return newUser
}

const getAllUserService = async () => {
    const connection = await getConnection();

    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `user`'
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