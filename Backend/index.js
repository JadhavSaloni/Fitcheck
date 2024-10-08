const port = 4000;
const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { abort } = require("process");

app.use(express.json());
app.use(cors());

/**Mongodb connection */
mongoose.connect(
  "mongodb+srv://salonijadhav0240:Saloni%402404@fitcheck.0vldt.mongodb.net/?retryWrites=true&w=majority&appName=FITCHECK"
);

//Api creation

app.get("/", (req, res) => {
  res.send("Express App is running ");
});

//image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });
//create uploading enpoints in storage  for image .
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  image:{
    type:String,
    required:true,
  },
  name: {
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
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date,
  },
  available: {
    type: Boolean,
    default: true,
  },
});


// api for adding products
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.images,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});
app.post('/removeproduct', async(req,res) =>{
  await Product.findOneAndDelete({id:req.body.id});
  console.log ("Removed");
  res.json({
      success:true,
      name:req.body.name,
  })
})
// getting all products 
app.get('/allproducts', async(req, res) => {
  let products = await Product.find({});
       console.log("All products are fetched");
       res.send(products);
  
})

//user model
const User = mongoose.model('User' , {
  name: {
    type: String,
  },
  email:{
    type: String,
    unique: true,
  },
  password:{
    type: String,
  },
  carData:{
    type: Object,
  },
  data:{
    type: Date,
    default: Date.now
  },
})


app.post('/signup', async(req, res) =>{
  let check = await User.findOne({email: req.body.email});
  if (check ){
    return res.status(400).json({success:false, error:"existing user found with same email address"});
  }
  let cart = {};
  for (let i =0; i<3000; i++){
    cart[i]=0;
  }
  const user = new User({
    name: req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData: cart,
  })
  await user.save();

  const data = {
    user: {
      id:user.id
    }
  }
  const token = jwt.sign(data, 'secret_ecom');
  res.json({success: true, token})
})


//enpoint user 
app.post('/Login', async(res, req) =>{
  let user = await User.findOne({email:req.body.email});
  if(user) {
    const passMatch = req.body.password === user.password;
    if(passMatch){
      const data = {
        user: {
          id: user.id
        }
      }
      const token = jwt.sign(data, "secret_ecom");
      res.json({success:true, token});

    }
    else{
      res.json({success:false , errors: "Wrong Password "});
    }
  } else {
    res.json({success:false, erors:"Wrong Email Address"})
  }
})

app.use(express.static("./frontend/App.jsx"));
app.get("*",(req, res) => {
  res.sendFile(path.resolve(__dirname,"Frontend","App.jsx"))
})

app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port " + port);
  } else {
    console.log("Error:" + error);
  }
});
