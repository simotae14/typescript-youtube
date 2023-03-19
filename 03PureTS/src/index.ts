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
  readonly city: string = "Bergamo";
  constructor(
    public email: string, 
    public name: string,
    // private userId: string
  ) {
  }

  // GETTER
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
}

const simone = new User('simone', 's@s.it');
// simone.name