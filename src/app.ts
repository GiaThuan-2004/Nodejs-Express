import express from "express"
import 'dotenv/config'
import webRouter from "./routes/web"

const app = express()
const PORT = process.env.PORT || 8080

// view config
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//router config
webRouter(app)

app.listen(8080, () => {
    console.log(`App is running on ${PORT}`)
})