import { Request, Response } from 'express'

const getHomePage = (req: Request, res: Response) => {
    return res.render('home')
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render('user')
}

// so do de post data: 
//form-html(bam submit) -> day infor cua form len /create-user -> /create-user goi controller postCreatedUser
// -> res.redirect('/') dua toi duong dan / -> / -> goi controller getHomePage de render ra home.ejs

const postCreatedUser = (req: Request, res: Response) => {
    // chua nhan dc data phai config
    console.log(req.body)
    return res.redirect('/')
}

export { getHomePage, getCreateUserPage, postCreatedUser }