var express = require("express");

var router = express.Router();

// /users/
// router.get("/",(req,res)=>{
//     res.send("Get Request for users")
// });
 
// /users/get-users-details
router.get("/get-users-details/:id",(req,res)=>{
    res.send("Get Request for specific users "+req.params.id)
});

router.use("/p",(req,res,next)=>{
    req.headers["content-type"]="Application/json"
    console.log("API call started")
    next()
});

router.get("/p",(req,res,next)=>{
    res.send("working fine and headers is "+req.headers["content-type"])
    next()
});

router.use("/p",(req,res)=>{
    console.log("API call finished")
});

router.get("/get-users/:id([0-9]+)",(req,res)=>{
    res.send("Get Request for specific users "+req.params.id)
});

router.get("/get-username/:userName([a-zA-Z]{5})",(req,res)=>{
    res.send("Get Request for specific users "+req.params.userName)
});

router.get("*",(req,res)=>{
    var json_out = {
        "status code":404,
        "message":"url not found"
    }
    res.send(json_out)
});

router.post("/create-users/",(req,res)=>{
    res.send("the users data created ")
});

router.put("/update-users",(req,res)=>{
    res.send("the users data updated")
});

router.delete("/update-users",(req,res)=>{
    res.send("the users data deleted")
});

module.exports = router;