const port = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce");

// Image Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/images"); // ✅ correct way
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    ); // ✅ correct way
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
const productSchema = new mongoose.Schema({
  id: {
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
});

const Product = mongoose.model("Product", productSchema);

// Add Product Endpoint
app.post("/addproduct", async (req, res) => {
  let id;
  let products = await Product.find({});
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const { name, image, category, new_price } = req.body;
  const product = new Product({ id, name, image, category, new_price });
  await product.save(); // Save the product to the database
  res.json({ success: true, message: "Product Added Successfully" });
});

// Remove Product Endpoint
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ message: "Product Removed Successfully" });
});

// Get All Products Endpoint
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  res.send(products);
});

// User model
const Users = mongoose.model("User",{
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    cartData: {
        type: Object
    },
    date: {
        type: Date,
        default: Date.now
    }
}) 

// Creating endpoint for user registration
app.post("/signup", async (req, res) => {
    let emailCheck;
    emailCheck = await Users.findOne({email: req.body.email})
    if (emailCheck){
        res.json({success: false, message: "Email already registered"})
    }
    let cart = {}
    // for (let i = 0; i < 50; i++) {
    //   cart[i] = 0;
    // }

    const {name, email, password} = req.body;
    const user = new Users({name, email, password, cartData: cart});
    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }
    let token = jwt.sign(data, 'seceretkey_ecom')
    res.json({success: true, token})

})

// creating endpoint for user login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({email: req.body.email})
    if (user) {
        let passwordCheck = user.password === req.body.password
        if (passwordCheck) {
            let data = {
                user: {
                    id: user.id
                }
            }
            let token = jwt.sign(data, 'seceretkey_ecom')
            return res.json({success: true, token})    
        }
        else{ 
            return res.json({success: false, message: "Invalid Password"})
        }
    }
    return res.json({success: false, message: "User not found"});
})

app.get("/newcollection", async (req,res) => {
    let products = await Product.find({})
    res.send(products);
})

app.get("/popularinwomen", async (req,res) => {
    let products = await Product.find({category: 'women'})
    res.send(products);
})

// middleware for authenticating user using jwt
const fetchuser = (req, res, next) => {
    let token = req.header('authToken');
    if (!token){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
    try {
        let data = jwt.verify(token, 'seceretkey_ecom')
        req.user = data.user
        next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
}

// app.post("/addtocart", fetchuser ,async (req,res) => {
//   console.log(req.body, req.user);
//   let userData = await Users.findOne({_id:req.user.id});

//   if (!userData.cartData[req.body.id]){
//     userData.cartData[req.body.id] = 0;
//   }

//   userData.cartData[req.body.id] += 1;
//   await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData});
//   res.send("Added to cart");
// })

app.post("/addtocart", fetchuser, async (req, res) => {
  try {
    let { id } = req.body; // product _id
    let userData = await Users.findById(req.user.id);

    // ✅ Make sure cartData exists
    if (!userData.cartData) userData.cartData = {};

    // ✅ Initialize this product if not present
    if (!userData.cartData[id]) userData.cartData[id] = 0;

    // ✅ Increment correctly
    userData.cartData[id] += 1;

    await Users.findByIdAndUpdate(req.user.id, { cartData: userData.cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post("/removecart", fetchuser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.id] && userData.cartData[req.body.id] > 0) {
    userData.cartData[req.body.id] -= 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.json({ success: true, message: "Removed from cart" });
  } 
});

app.post("/getcartdata", fetchuser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  res.json( userData.cartData );
})

app.listen(port);
