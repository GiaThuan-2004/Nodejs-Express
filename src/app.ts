import express from "express"

const app = express()
const PORT = 8080

app.get("/", (req, res) => {
    res.send('Hello world With NodeMon')
})

app.listen(8080, () => {
    console.log(`App is running on ${PORT}`)
})