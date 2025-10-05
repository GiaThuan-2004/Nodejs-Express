import express from "express"
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send('Hello world With NodeMon')
})

app.listen(8080, () => {
    console.log(`App is running on ${PORT}`)
    console.log(`File .env PORT = ${process.env.PORT}`)
})