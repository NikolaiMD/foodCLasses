module.exports = class Measurement{
    constructor(val, unit){
        this.val = val;
        this.unit = unit;
        this.vol = () => this.val + " " + this.unit;
    }

}

