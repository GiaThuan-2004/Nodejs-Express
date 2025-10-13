import express, { Express } from "express"
import { getCreateUserPage, getHomePage, postCreatedUser } from "controllers/user-controller"

const router = express.Router()

const webRouter = (app: Express) => {
    //router homepage
    router.get("/", getHomePage)

    //router create feature
    router.get("/user", getCreateUserPage)
    router.post("/create-user", postCreatedUser)

    router.get("/myLink", (req, res) => {
        res.send("This is new Link")
    })

    app.use("/", router) //giong @RequestMapping (nhom cac url co chuc nang giong nhau)
}

export default webRouter