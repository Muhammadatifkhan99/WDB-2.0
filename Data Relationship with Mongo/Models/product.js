const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/relationshipDemo")
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch(err => {
        console.log("OH NO, MONGO CONNECTION ERROR!!!!");
        console.log(err);
    })


const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"]
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: "Product"}]
});

const Product = new mongoose.model("Product", productSchema);
const Farm = new mongoose.model("Farm",farmSchema);



// Product.insertMany([
//     {name: "Goddess Water Melon",price: 4.99,season: "Summer"},
//     {name: "Sugar Baby Water Melon",price: 4.99,season: "Summer"},
//     {name: "Asparagus",price: 3.99,season: "Spring"},
//     {name: "Goddess Water Melon",price: 4.99,season: "Summer"}
// ])

// const makeFarm = async () => {
//     const farm = new Farm({ name: "Full Belly Farms", city: "Guinda, CA" });
//     const melon = await Product.findOne({name: "Goddess Water Melon"});
//     farm.products.push(melon);
//     await farm.save(); 
//     console.log(farm);
// }

const addProduct = async () => {
    const farm = await Farm.findOne({name: "Full Belly Farms"});
    const watermelon = await Product.findOne({name:"Sugar Baby Water Melon"});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

// makeFarm();

// addProduct();

Farm.findOne({name:"Full Belly Farms"})
.populate("products")  //the ref passed to the products in the schema is now refered here
.then( farm => console.log(farm));
