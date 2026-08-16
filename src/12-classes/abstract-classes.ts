abstract class PaymentProcessor {
  abstract process(amount: number): void;

  printReceipt(amount: number): void {
    console.log("Receipt generated for:", amount);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  process(amount: number): void {
    console.log("Bank transfer processed:", amount);
  }
}

const processor = new BankTransferProcessor();

processor.process(4800);
processor.printReceipt(4800);
