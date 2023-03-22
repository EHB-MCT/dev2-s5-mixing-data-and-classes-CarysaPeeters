"use strict";
import Joke from './Joke.js';

const app = {
	items: [],
	init() {
        this.getData();
    },
	getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
        .then(function(response){
            return response.json;
        })
        .then (function(json) {
            console.log(json.jokes);
            json.jokes.forEach(function(j) {
                const joke = new Joke(j.setup, j.delivery);
                app.items.push(joke);
            });
            console.log(app.items);
            this.render();

        });
    },
	onSearch() {},
	render() {
        let htmlString = '';
        app.items.forEach(function(item) {
            htmlString += Joke.htmlString;
        });
        document.getElementById('list').innerHTML = htmlString;
    },
};
app.init();
// console.log(Joke);
