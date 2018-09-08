
const index = require("express").Router()

index.get("/test", (req, res) => {
    res.json({success: true})
})

export default index
