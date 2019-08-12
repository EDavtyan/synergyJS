class converter {
    constructor() {
        this.conversions = new Map();
        this.conversions.set(['meters','centimeters'].toString(), meters => 100 * meters );  // the inverse function needs to be added manually
        this.conversions.set(['centimeters', 'meters'].toString(),centimeters => centimeters / 100 );
    }

    convert = function (type1, type2 , value) {
        let arr = [type1, type2];
        if (this.conversions.has(arr.toString())) {
            return this.conversions.get(arr.toString())(value);
        }
        return "no such conversion function, add it yourself";
    }

    add = function (type1, type2, func) {
        let arr = [type1, type2];
        if (!this.conversions.has(arr.toString())) {
            this.conversions.set(arr.toString(), func);
        } else {
            return "this conversion already exists";
        }

    }
}