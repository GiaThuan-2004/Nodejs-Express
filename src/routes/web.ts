import express, { Express } from "express"
import { getCreateUserPage, getHomePage } from "../controllers/user-controller"

const router = express.Router()

const webRouter = (app: Express) => {
    router.get("/", getHomePage)

    router.get("/user", getCreateUserPage)

    router.get("/myLink", (req, res) => {
        res.send("This is new Link")
    })

    app.use("/", router) //giong @RequestMapping (nhom cac url co phuc vu )
}

export default webRouter