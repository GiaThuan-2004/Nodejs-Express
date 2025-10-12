import getConnection from "../controllers/config/database"

const createUserService = (email: string, name: string, address: string) => {
    console.log('>>>insert data')
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