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

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: "User"}
})

//MODELS

const User = new mongoose.model("User",userSchema);
const Tweet = new mongoose.model("Tweet",tweetSchema);

// const makeTweet = async () => {
//     // const user = new User({username: "Chickenfan99",age:61});
//     const user = new User.findOne({username: "Chickenfan99"});
//     const tweet2 = new Tweet({text: "bock bock they make noises", likes: 1239});
//     tweet2.user = user;
//     user.save();
//     tweet2.save();

// }

// makeTweet();

const findTweet = async () => {
    const t = await Tweet.find({}).populate("user");
    console.log(t);
}
findTweet();

