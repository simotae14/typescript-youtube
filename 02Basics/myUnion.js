"use strict";
exports.__esModule = true;
var score = 33;
score = 44;
score = "55";
var simone = {
    name: "Simone",
    id: 334
};
simone = {
    username: "st",
    id: 334
};
// function getDbId(id: number | string) {
//   // other instructions to retrieve data from API calls
//   console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
// Union Types with arrays
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
// literal type assignment
// let pi: 3.14 = 3.14;
// pi = 3.145;
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "crew";
