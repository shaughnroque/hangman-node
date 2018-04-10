
var Letter = function (char, check) {
    this.check = false

    this.char = char;

    this.guessCheck = function () {
        console.log(this.check);
        if (this.check === true) {
            console.log(this.char);
        } else {
            conosole.log("_");
        }
    };

    this.correctCheck = function (cor) {
        console.log(this.character);
        if (this.character === cor) {
            this.check === true;
            console.log(cor);
        } else {
            this.check === false;
            console.log("_");
        }
    }



};
module.exports = Letter;