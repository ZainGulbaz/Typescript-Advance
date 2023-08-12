"use strict";
//In typescript for Types Only structure matters
let point = {
    id: "sdasdadsa"
};
let point2 = {
    id: "xczxcxcsxczx"
};
point = point2;
let product = {
    id: 1,
    name: "Laptop"
};
let order = {
    id: 1,
    name: "Zains order",
    productId: 1
};
order = product; //Error
product = order; //No Error
