"use strict";
//In classes we can have private,protected or public properties/methods
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`The animal ${this.name} moved by ${distance}`);
    }
}
class Bird extends Animal {
    fly(distance) {
        console.log(`The bird${this.name} flew by ${distance}`);
    }
}
let dog = new Animal("Dog");
dog.move(2);
let sparrow = new Bird("Sparrow");
sparrow.move(3);
sparrow.move(10);
