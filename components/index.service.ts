
const index = require("express").Router()

index.get("/doc", (req, res) => {
    res.redirect("/index.doc.html")
})

export default index
