const jokes = require('give-me-a-joke');

jokes.getRandomDadJoke(function (joke) {
    console.log(color.green(joke));
});