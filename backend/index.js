const port = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

mongoose.connect("localhost:27017/Ecommerce");

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint for images

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// mongoose Schema
const Product = mongoose.model({
    id : {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
})

// Add Product Endpoint
app.post("/addproduct", async (req, res) => {
    let id;
    let products = await Product.find({})
    if (products.length > 0) {
        let last_product_array = Products.slice(-1);
        let last_product = last_product_array[0];
        let id = last_product.id + 1;
    } else {
        id = 1;
    }
    const { name, image, category, new_price } = req.body;
    const product = new Product({ id, name, image, category, new_price });
    await product.save(); // Save the product to the database
    res.json({ message: "Product Added Successfully" });
})

// Remove Product Endpoint
app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ message: "Product Removed Successfully" });
})

// Get All Products Endpoint
app.get("/allproducts", async (req, res) => {
    let products = await Product.find({});
    res.send(products);
})