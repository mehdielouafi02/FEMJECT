const mongoose = require("mongoose")

const connectDB=async()=>{
try {
    await mongoose.connect("mongodb+srv://mehdi:packagexxx@cluster0.zpkri.mongodb.net/projet?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true  })
    console.log("DB connected")
} catch (error) {
    console.log("DB not connected")
    
}
}
module.exports= connectDB