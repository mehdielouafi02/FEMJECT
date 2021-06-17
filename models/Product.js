
const mongoose = require('mongoose');
const { Schema, model } =mongoose;
const productSchema = new Schema({


name: { type: String, required: true},
price: { type: Number, required: true},
brand: String,
description: String, 
});

module.exports= User = model("product", productSchema);
