import { Request, Response } from 'express'
import { createUserService, getAllUserService } from '../services/userService'

const getHomePage = async (req: Request, res: Response) => {

    const users = await getAllUserService()
    console.log(users);

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

const postCreatedUser = (req: Request, res: Response) => {
    // chua nhan dc data phai config
    const { email, name, address } = req.body

    createUserService(email, name, address)

    return res.redirect('/')
}

export { getHomePage, getCreateUserPage, postCreatedUser }