"use strict";

export default class Joke {
	constructor(setup, delivery) {
		this.setup = setup;
		this.delivery = delivery;
		console.log("Hi this is an new joke");
	}

    get htmlString() {
        return `
        <div class="item">
        <div>
          <div class="item-field"> <h2>$(this.setup)</h2></div>
          <div class="item-field">            <h3>$(this.delivery)</h3>
          </div>
        </div>
        </div>
           
        `;
    }
}
