interface Customer {
  customerId: number;
  fullName: string;
  email: string;
  phone?: string;
}

const customer: Customer = {
  customerId: 501,
  fullName: "Neha Sharma",
  email: "neha@example.com"
};

console.log(customer.customerId);
console.log(customer.fullName);
console.log(customer.email);
console.log(customer.phone);