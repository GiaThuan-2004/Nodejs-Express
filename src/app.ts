import express from "express"
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 8080

// view config
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.get("/", (req, res) => {
    res.render("home") // render file home.ejs
})

app.listen(8080, () => {
    console.log(`App is running on ${PORT}`)
})