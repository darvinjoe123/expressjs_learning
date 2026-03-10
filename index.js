var express = require("express");
var products = require("./routes/products");
var orders = require("./routes/orders");
var items= require("./routes/items");
var users = require("./routes/users");
var reviews = require("./routes/reviews");
var studentsRouter = require("./routes/students");

var app = express();

var mongoose = require("mongoose");
var dbURL = require("./properties").DB_URL;
mongoose.connect(dbURL)

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb using mongooseJS")
})

app.use(express.json())
app.use("/products",products)
app.use("/orders",orders)
app.use("/items",items)
app.use("/users",users)
app.use("/reviews",reviews)
app.use("/students",studentsRouter)


app.listen(3000);