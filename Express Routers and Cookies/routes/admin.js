const express = require("express");
const router = express.Router();



router.use((req,res,next) => {
    if(req.query.isAdmin){
        next();
    } else {
        res.send("Sorry not an admin");
    }
})


router.get("/topsecret",(req,res) => {
    res.send("This is a top state secret");
})

router.get("/deleteeverything",(req,res) => {
    res.send("deleted everything");
})

module.exports = router;