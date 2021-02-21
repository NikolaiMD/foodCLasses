// this model depends on item
const Item = require("./Item")
const Drink = require("./Drink")
const Food = require("./Food")
const Measurement = require("./phys/Measurement")
const Price = require("./price/Price")
module.exports.menu =
    [
        new Food("salad", new Price(15.00, 'mdl'), 1, new Measurement(350,'g')),
        new Drink("Cola", new Price(25.00, 'mdl'), 2, new Measurement(500,'ml')),
        new Food("bread", new Price(5.00, 'mdl'), 3, new Measurement(50,'g'))
    ]
