//************************Creating new Classes********************** */

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    innerRGB() {                           //Creating new functions 
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;  //Using previously defined function inside another function
    }
    rgba(a) {
        return `rgba(${this.innerRGB()},${a})`

    }
};
const c1 = new Color(255, 255, 255);