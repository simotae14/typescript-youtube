class User {
  email: string;
  name: string;
  readonly city: string = "Bergamo";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const simone = new User('simone', 's@s.it');
// simone.city = 'Bergamo';