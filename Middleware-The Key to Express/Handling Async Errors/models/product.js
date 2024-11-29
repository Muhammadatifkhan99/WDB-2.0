const mongoose = require("mongoose");

//no need to connect to the database because this file wil be required in the index.js file which already 
//have a connection to the database..................

//product schema

const productSchema = new mongoose.Schema ({
    name: {
        type : String,
        required: [true, "Name cannot be empty"]
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ["fruit", "vegetable","dairy"]
    }
});

//compile the model 
const Product = mongoose.model("Product", productSchema);


///export the module

module.exports = Product;