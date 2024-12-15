const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodoverride = require("method-override");
const Farm = require("./models/farms");

const Product = require("./models/product");

mongoose.connect("mongodb://localhost:27017/farmStandTake2")
    .then(() => {
        console.log("CONNECTION OPEN");
        //we donot need to nest our code here becasue mongoose do operation buffering allowing us to use
        //the models immediatly with out having to wait of the mongoose to be connected
        //
    })
    .catch(err => {
        console.log("ERROR");
        console.log(err);
})


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//express middleware
app.use(express.urlencoded({extended:true}))
app.use(methodoverride("_method"));



const categories = ["fruit","vegetable","dairy"];

//================================ROUTES=======================================================

//FARM ROUTES

app.get("/farms", async(req,res) => {
    const farms = await Farm.find({});
    res.render("farms/index",{ farms })
})

app.get("/farms/new", (req,res) => {
    res.render("farms/new");
})

app.get("/farms/:id", async(req,res) => {
    const farms = await Farm.findById(req.params.id);
    res.render("farms/show", { farms });
})

app.get("/farms/:id/products/new", (req,res) => {
    const { id } = req.params;
    res.render("products/new", { categories, id});
})

app.post("/farms/:id/products",async (req,res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, city , email } = req.body;
    const product = new Product({name,city,email});
    farm.product.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
})


app.post("/farms", async (req,res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect("/farms")
})










//PRODUCT ROUTES
//adding a basic route
app.get("/products", async (req,res) => {
    const { category } = req.query;
    if(category){
        const products = await Product.find({ category });
        res.render("products/index", { products, category });
    } else {
        const products = await Product.find({})
        // console.log(products);
        res.render("products/index", { products, category });
    }
})
//creating the new product route..........................
app.get("/products/new", async (req,res) => {
    res.render("products/new", { categories });
})
//route for submission of the form i.e is to the /products
app.post("/products", async(req,res) => {
    //in post requests when information is required from the post request body, we do not have access to it 
    //right away,,,its undefined if access,,, use express middle wares to deal with this....
    //app.use(express.urlendcoded({extended:true}))
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    //redirecting to the show page for each product
    // res.send("making your product");
    res.redirect(`/products/${ newProduct._id }`)
})
app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);
    // res.send("Details Page");
    res.render("products/show", { product });
})
app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render("products/edit", { product, categories });
})
app.put("/products/:id", async (req,res) => {
    // console.log(req.body);
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new:true});
    res.redirect(`/products/${product._id}`);
})
app.delete("/products/:id", async (req,res) => {
    const { id } = req.params;
    const deletedProduct  = await Product.findByIdAndDelete(id);
    res.redirect("/products");
})
//================================ROUTES=======================================================
app.listen(4000, () => {
    console.log("APP IS LISTENING ON PORT 4000!");
})