class Cookie {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
}

let cookieOne = new Cookie('green');

let cookieTwo = new Cookie('blue');

console.log(cookieTwo.getColor());

cookieTwo.setColor('red');

console.log(cookieTwo.getColor());

// class LinkedList {
//     constructor(value) {

//     }


// }

let wtf = new Array(1,2);

console.log(wtf);

