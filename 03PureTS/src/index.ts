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
  private _courseCount = 1;

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

  get courseCount(): number {
    return this._courseCount;
  }
}

const simone = new User('simone', 's@s.it');
// simone.name