
const index = require("express").Router()

index.get("/docs", (req, res) => {
    res.sendFile("/public/index.doc.html")
})

export default index
