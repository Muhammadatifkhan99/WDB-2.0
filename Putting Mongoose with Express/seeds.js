const mongoose = require("mongoose");

const product = require("./models/product");
const Product = require("./models/product");

mongoose.connect("mongodb://localhost:27017/farmStand")
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

//this file will be run whenever we need some data in the database in mongo....to seed the data base separatly from the webapp

// const p = new Product ({
//     name: "Ruby Graphefruit",
//     price: 1.99,
//     category: "fruit"
// })

// p.save().then (p => {
//     console.log(p);
// }).catch(e => {
//     console.log(e);
// })


// const seedProducts = [
//     {
//         name: 'Fairy Eggplant',
//         price: 1.00,
//         category: 'vegetable'
//     },
//     {
//         name: 'Organic Goddess Melon',
//         price: 4.99,
//         category: 'fruit'
//     },
//     {
//         name: 'Organic Mini Seedless Watermelon',
//         price: 3.99,
//         category: 'fruit'
//     },
//     {
//         name: 'Organic Celery',
//         price: 1.50,
//         category: 'vegetable'
//     },
//     {
//         name: 'Chocolate Whole Milk',
//         price: 2.69,
//         category: 'dairy'
//     },
// ]

// Product.insertMany(seedProducts)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })