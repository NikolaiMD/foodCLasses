module.exports = class price{
    constructor(value, currency){
        this.value = value;
        this.currency = currency;
        this.price = () =>  this.value + " " + this.currency;
    }

}
