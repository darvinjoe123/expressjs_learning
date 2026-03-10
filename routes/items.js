var express = require("express");

var router = express.Router();

// /items/
router.get("/",(req,res)=>{
    res.send("Get Request for items")
});
 
// /items/get-items-details
router.get("/get-items-details",(req,res)=>{
    res.send("Get Request for specific items")
});

router.post("/create-items",(req,res)=>{
    res.send("the items data created")
});

router.put("/update-items",(req,res)=>{
    res.send("the items data updated")
});

router.delete("/update-items",(req,res)=>{
    res.send("the items data deleted")
});

module.exports = router;