interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  // startTrail: () => string
  startTrail(): string
  getCoupon(couponname: string, value: number): number
}

const simone: User = {
  dbId: 22,
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