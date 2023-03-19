let score: number | string = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let simone: User | Admin = {
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

function getDbId(id: number | string) {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
  
}

// Union Types with arrays
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true]; 

// literal type assignment
// let pi: 3.14 = 3.14;

// pi = 3.145;
let seatAllotment: "aisle" | "window" | "middle";

seatAllotment = "aisle";
seatAllotment = "crew";


export {};