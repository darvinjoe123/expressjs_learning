var express = require("express");

var router = express.Router();

// /reviews/
router.get("/",(req,res)=>{
    res.send("Get Request for reviews")
});
 
// /reviews/get-reviews-details
router.get("/get-reviews-details",(req,res)=>{
    res.send("Get Request for specific reviews")
});

router.post("/create-reviews",(req,res)=>{
    res.send("the reviews data created")
});

router.put("/update-reviews",(req,res)=>{
    res.send("the reviews data updated")
});

router.delete("/update-reviews",(req,res)=>{
    res.send("the reviews data deleted")
});

module.exports = router;