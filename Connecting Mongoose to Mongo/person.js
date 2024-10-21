const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopApp", {useNewUrlParser: true})
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


//define the mongoose model

const Person = mongoose.model('Person', personSchema);