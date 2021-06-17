const express = require("express");

const router = express.Router();

const Product = require("../models/Product");

//@method  POST /products
//@desc  add new product

router.post("/", (req, res) => {
  const { name, price, brand, description } = req.body;

  if (!name || !price || name == "") {
    return res.send("name or price are required");
  }

  const newProduct = new Product({ name, price, brand, description });

  newProduct
    .save()
    .then(() => res.send({ msg: "product added", newProduct }))
    .catch((err) => res.send("server error"));
});

//@method  GET /products
//@desc  get all products

router.get("/", (req, res) => {
  Product.find({})
    .then((products) => res.send({ msg: "all products", products }))
    .catch((err) => res.send("server error"));
});

//@method  GET /products/:id
//@desc  get product by id

router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.send({ msg: "product by id", product }))
    .catch((err) => res.send("server error!"));
});

//@method PUT /products/:id
//@desc  update a product

router.put("/:id", (req, res) => {
  const { name, price, brand, description } = req.body;

  if (!name) {
    return res.send("name is required");
  }
  if (!price) {
    return res.send("price is required");
  }

  Product.findByIdAndUpdate(req.params.id, { name, price, brand, description })
    .then(() => res.send({ msg: "product is updated" }))
    .catch((err) => res.send("server error"));
});

//@method DELETE /products/:id
//@desc  delete a product

router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.send({ msg: "product deleted" }))
    .catch((err) => res.send("server error"));
});

module.exports = router;
