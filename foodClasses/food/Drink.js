const Item = require("./Item")
module.exports = class Drink extends Item{
constructor(name, price, id, vol) {
        super(name, price, id, vol)
        this.vol = vol;
        this.price = price;
    }

    print() {

        return `---------------------------------\n` +
            `${this.id}. ${this.name}: ${this.price.price()} : ${this.vol.vol()}\n` +
            `---------------------------------\n`
    }
}