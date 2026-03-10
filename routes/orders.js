var express = require("express");

var router = express.Router();

// /orders/
router.get("/",(req,res)=>{
    res.send("Get Request for orders")
});
 
// /products/get-orders-details
router.get("/get-orders-details",(req,res)=>{
    res.send("Get Request for specific orders")
});

router.post("/create-orders",(req,res)=>{
    res.send("the orders data created")
});

router.put("/update-orders",(req,res)=>{
    res.send("the orders data updated")
});

router.delete("/update-orders",(req,res)=>{
    res.send("the orders data deleted")
});

module.exports = router;