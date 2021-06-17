console.clear();
// import express
const express = require ('express');
const connectDB = require('./config/connectDB');

// import  app
const app = express();

require('dotenv').config();

connectDB();

// router
// user
app.use(express.json());
app.use("/api/user",require("./router/user"))
// product
app.use("/api/product",require("./router/product"))




// PORT
const PORT = process.env.PORT || 5000;
// create server
app.listen(PORT ,  (err) => {

    err ? console.log('server error') :
    
    console.log(`server is running at port ${PORT}`);
    
    })