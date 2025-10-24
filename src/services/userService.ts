import { prisma } from "config/client";
import getConnection from "config/database"
import { name } from "ejs";
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
    const AllUSers = await prisma.user.findMany();

    return AllUSers;
}

const deleteUserApi = async (id: number) => {
    await prisma.user.delete({
        where: {
            id: id
        }
    })
}

const detailUserApi = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    return user
}

const updateUserApi = async (user: IUser) => {
    await prisma.user.update({
        where: {
            id: +user.id
        },
        data: {
            email: user.email,
            name: user.name,
            address: user.address
        }
    })
}


export { createUserService, getAllUserService, deleteUserApi, detailUserApi, updateUserApi }