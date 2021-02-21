module.exports = class Item {
    constructor(name, price, id, vol) {
        this.name = name;
        this.id = id;
        this.vol = vol
        this.price = price;
    }

    print() {
        return `---------------------------------\n` +
            `${this.id}. ${this.name}: ${this.price.price()}, ${this.vol.vol()} \n` +
            `---------------------------------\n`
    }
}