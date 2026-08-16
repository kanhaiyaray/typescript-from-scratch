interface Passport {
  readonly passportNumber: string;
  holderName: string;
  country: string;
}

const passport: Passport = {
  passportNumber: "P7845129",
  holderName: "Rohan Kapoor",
  country: "India"
};

console.log(passport.passportNumber);
console.log(passport.holderName);
console.log(passport.country);

passport.holderName = "Rohan Kumar";

console.log(passport.holderName);