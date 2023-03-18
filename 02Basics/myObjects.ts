const User = {
  name: "simone",
  email: "simo@test.it",
  isActive: true
};

function createUser({
  name: string,
  isPaid: boolean
}){}

let newUser = {
  name: 'simone',
  isPaid: false,
  email: 'h@h.it'
};

createUser(newUser);

function createCourse():{name: string, price: number} {
  return {
    name: 'reactjs',
    price: 399
  };
}

export {};