class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        // ES6 String Interpolation!
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
const dot2 = new Dot(5, 13);
dot2.showLocation();