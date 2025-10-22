import { Request, Response } from 'express'
import { createUserService, deleteUserApi, detailUserApi, getAllUserService, updateUserApi } from 'services/userService'
import { IUser } from 'src/types/global'

const getHomePage = async (req: Request, res: Response) => {

    const users = await getAllUserService()
    return res.render('home', {
        users: users
    })
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render('user')
}

// so do de post data: 
//form-html(bam submit) -> day infor cua form len /create-user -> /create-user goi controller postCreatedUser
// -> res.redirect('/') dua toi duong dan / -> / -> goi controller getHomePage de render ra home.ejs

const postCreatedUser = async (req: Request, res: Response) => {
    // chua nhan dc data phai config
    const { email, name, address } = req.body;

    await createUserService(email, name, address);

    return res.redirect('/');
}

const postDeleteUser = async (req: Request, res: Response) => {
    await deleteUserApi(req.params.id);

    return res.redirect('/');
}

const getDetailUser = async (req: Request, res: Response) => {
    const user = await detailUserApi(req.params.id);
    return res.render('view-detail', {
        user: user[0]
    });
}

const postUpdateUser = async (req: Request, res: Response) => {
    const user: IUser = req.body;
    await updateUserApi(user);
    return res.redirect('/')
}

export {
    getHomePage, getCreateUserPage, postCreatedUser,
    postDeleteUser, getDetailUser, postUpdateUser
}