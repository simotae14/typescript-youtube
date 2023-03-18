"use strict";
exports.__esModule = true;
var User = {
    name: "simone",
    email: "simo@test.it",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = {
    name: 'simone',
    isPaid: false,
    email: 'h@h.it'
};
createUser(newUser);
function createCourse() {
    return {
        name: 'reactjs',
        price: 399
    };
}
