interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  // startTrail: () => string
  startTrail(): string
  getCoupon(couponname: string, value: number): number
}

interface User {
  githubToken: string
}

// extend interface
interface Admin extends User {
  role: 'admin' | 'ta' | 'learner'
}

const simone: Admin = {
  dbId: 22,
  role: 'admin',
  githubToken: 'github',
  email: 's@s.com',
  userId: 2211,
  startTrail: () => {
    return "trial started";
  },
  getCoupon: (name: "simone10", off: 10) => {
    return 10;
  }
};

simone.email = 's@s.it';
// simone.dbId = 22 // not allowed

export {};