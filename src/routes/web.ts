import express, { Express } from "express"
import { getCreateUserPage, getDetailUser, getHomePage, postCreatedUser, postDeleteUser } from "controllers/user-controller"

const router = express.Router()

const webRouter = (app: Express) => {
    //router homepage
    router.get("/", getHomePage)

    //router create feature
    router.get("/user", getCreateUserPage)
    router.post("/create-user", postCreatedUser)

    //router delete feature
    router.post('/delete/:id', postDeleteUser)

    //router view detail feature
    router.get('/view/:id', getDetailUser)

    router.get("/myLink", (req, res) => {
        res.send("This is new Link")
    })

    app.use("/", router) //giong @RequestMapping (nhom cac url co chuc nang giong nhau)
}

export default webRouter