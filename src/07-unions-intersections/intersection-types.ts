interface LocationInfo {
  city: string;
  country: string;
}

interface ContactInfo1 {
  email: string;
  phone: string;
}

type CustomerProfile = LocationInfo & ContactInfo1;

const customerProfile: CustomerProfile = {
  city: "Pune",
  country: "India",
  email: "kavya@example.com",
  phone: "9123456780"
};

console.log("City:", customerProfile.city);
console.log("Country:", customerProfile.country);
console.log("Email:", customerProfile.email);
console.log("Phone:", customerProfile.phone);
