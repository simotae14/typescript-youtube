const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);

identityThree("3");

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string,
  type: number
};

identityFour<Bootle>({
  brand: 'simone',
  type: 4
});

// GENERICS WITH ARRAYS
function getSearchProducts<T>(products: T[]): T {
  // do some DB operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
  // do some DB operations
  const myIndex = 4;
  return products[myIndex];
}

// more generics
// function anotherFunction<T, U>(valOne: T, valTwo: U): object {
//   return {
//     valOne,
//     valTwo
//   }
// }

// anotherFunction(3, "4");

// function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
//   return {
//     valOne,
//     valTwo
//   }
// }

// anotherFunction(3, "4");

interface Database {
  connection: string,
  username: string,
  password: string
};

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo
  }
}

anotherFunction(3, {
  connection: "tcp",
  username: "simo",
  password: "pwd"
});

// Class with Generics
interface Quiz {
  name: string,
  type: string
}

interface Course {
  name: string,
  author: string,
  subject: string
}

class Sellable<T> {
  public cart: T[] = []

  addtoCart(product: T) {
    this.cart.push(product);
  }
}