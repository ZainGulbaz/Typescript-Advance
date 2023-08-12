"use strict";
//Symbols are uniquely identifiers that are used in typescript, They are always unique
let namee = Symbol("name");
const obj = {
    [namee]: "Zain Gulbaz",
    rollNo: 86
};
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));
let namee2 = Symbol("name");
console.log(namee == namee2);
