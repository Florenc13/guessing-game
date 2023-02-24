class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.nMax = max;
        this.nMin = min;
    }

    guess() {
        this.result = Math.round((this.nMin + this.nMax) / 2)
        return this.result
    }

    lower() {
        this.nMax = this.result;
    }

    greater() {
        this.nMin = this.result;
    }
}

module.exports = GuessingGame;