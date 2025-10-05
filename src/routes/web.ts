import express, { Express } from "express"

const router = express.Router()

const webRouter = (app: Express) => {
    router.get("/", (req, res) => {
        res.render("home") // render file home.ejs
    })

    router.get("/myLink", (req, res) => {
        res.send("This is new Link")
    })

    app.use("/router", router) //giong @RequestMapping (nhom cac url co phuc vu )
}

export default webRouter