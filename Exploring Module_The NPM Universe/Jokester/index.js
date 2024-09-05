const jokes = require("give-me-a-joke");
const colors = require("colors");

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
    console.log(joke.inverse);
    console.log(joke.underline.red);
})