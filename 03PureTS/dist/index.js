"use strict";
// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = "Bergamo";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Bergamo";
    }
    // GETTER
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // SETTER
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
const simone = new User('simone', 's@s.it');
// simone.name
