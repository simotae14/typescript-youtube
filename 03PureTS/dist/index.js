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
        this.city = "Bergamo";
    }
}
const simone = new User('simone', 's@s.it');
simone.name;
