const express = require("express");
const { route } = require("./shelter");
const router = express.Router();


router.get("/",(req,res) => {
    res.send("ALL DOG");
})
router.get("/:id",(req,res) => {
    res.send("VIEWING ONE DOG");
})
router.get("/:id/edit",(req,res) => {
    res.send("EDITING ONE DOG");
})



module.exports = router;