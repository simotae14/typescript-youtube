// simple array
// const user: (string | number)[] = [1, "hc"];

let tUser: [string, number, boolean];

tUser = ["st", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "simo@test.it"];

newUser[1] = "st.com";

// newUser.push(true); // gives an error

export {};