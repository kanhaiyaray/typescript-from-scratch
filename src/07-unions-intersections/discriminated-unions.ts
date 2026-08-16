interface CardPayment {
  method: "card";
  cardHolder: string;
  amount: number;
}

interface UpiPayment {
  method: "upi";
  upiId: string;
  amount: number;
}

type Payment = CardPayment | UpiPayment;

function processPayment(payment: Payment): void {
  if (payment.method === "card") {
    console.log("Card Holder:", payment.cardHolder);
    console.log("Amount:", payment.amount);
  } else {
    console.log("UPI ID:", payment.upiId);
    console.log("Amount:", payment.amount);
  }
}

const cardPayment: CardPayment = {
  method: "card",
  cardHolder: "Karan Verma",
  amount: 2500
};

const upiPayment: UpiPayment = {
  method: "upi",
  upiId: "karan@paytm",
  amount: 1200
};

processPayment(cardPayment);
processPayment(upiPayment);