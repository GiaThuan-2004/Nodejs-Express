import express from "express"
import 'dotenv/config'
import webRouter from "./routes/web"
import getConnection from "./controllers/config/database"

const app = express()
const PORT = process.env.PORT || 8080

// view config
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static file config (css, img, js)
app.use(express.static('public'))

//router config
webRouter(app)

app.listen(8080, () => {
    console.log(`App is running on ${PORT}`)
})