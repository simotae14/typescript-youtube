"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("3");
function identityFour(val) {
    return val;
}
;
identityFour({
    brand: 'simone',
    type: 4
});
// GENERICS WITH ARRAYS
function getSearchProducts(products) {
    // do some DB operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some DB operations
    const myIndex = 4;
    return products[myIndex];
};
;
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, {
    connection: "tcp",
    username: "simo",
    password: "pwd"
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addtoCart(product) {
        this.cart.push(product);
    }
}
