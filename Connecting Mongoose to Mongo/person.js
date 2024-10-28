const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopApp")
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch(err => {
        console.log("ERROR");
        console.log(err);
})



//define the schema

const personSchema = new mongoose.Schema ({
    first: String,
    last: String
})

//virtual methods
personSchema.virtual('fullName').get(function(){return `${this.first} ${this.last}`})


//middle ware

personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("about to save");
})

personSchema.post('save', async function (){
    console.log('Just saved');
})

//define the mongoose model

const Person = mongoose.model('Person', personSchema);