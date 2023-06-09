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
  protected _courseCount = 1;

  readonly city: string = "Bergamo";
  constructor(
    public email: string, 
    public name: string,
    // private userId: string
  ) {
  }

  private deleteToken() {
    console.log('Token deleted');
  }

  // GETTER
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
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

class SubUser extends User {
  isFamily: boolean = true;

  changeCourseCount() {
    this._courseCount = 4;
  }
}

const simone = new User('simone', 's@s.it');
// simone.deleteToken() // gives error