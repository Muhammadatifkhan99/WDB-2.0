const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/relationshipDemo")
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch(err => {
        console.log("OH NO, MONGO CONNECTION ERROR!!!!");
        console.log(err);
    })


const userSchema = new mongoose.Schema({
    firstname: String,
    lastname:  String,
    addresses: [
        {
            _id: false,
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})


const User  = mongoose.model("User", userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Harry",
        last: "Potter"
    })
    u.addresses.push({
        street: "123 Sesame St.",
        city: "New York",
        state: "NY",
        country: "USA"
    })
    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: "99 3rd St.",
        city: "New York",
        state: "NY",
        country: "USA"
    })
    const res = user.save();
    console.log(res);
}

addAddress("6751d9bfdd1af741a5a2c945");

makeUser();


