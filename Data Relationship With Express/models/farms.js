const mongoose = require("mongoose");
const { Schema } = mongoose;



const farmSchem = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Farm must have a name"]
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Email Require"]
    },
    product:[
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
})







