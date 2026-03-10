var express = require("express");

var router = express.Router();

// /products/
router.get("/",(req,res)=>{
    res.send("Get Request for products")
});
 
// /products/get-product-details
router.get("/get-product-details",(req,res)=>{
    res.send("Get Request for specific products")
});

router.post("/create-products",(req,res)=>{
    res.send("the product data created")
});

router.put("/update-products",(req,res)=>{
    res.send("the product data updated")
});

router.delete("/update-products",(req,res)=>{
    res.send("the product data deleted")
});

module.exports = router;