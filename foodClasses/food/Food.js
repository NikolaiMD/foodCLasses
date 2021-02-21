const Item = require("./Item")

module.exports = class Food extends Item {
    constructor(name, price, id, vol) {
        super(name, price, id)
        this.vol = vol;
        this.price = price;
    }

    print() {
        return `---------------------------------\n` +
            `${this.id}. ${this.name}: ${this.price.price()} : ${this.vol.vol()}\n` +
            `---------------------------------\n`

    }
}