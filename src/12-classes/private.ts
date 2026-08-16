class DigitalWallet {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const wallet = new DigitalWallet();

wallet.deposit(2500);
wallet.deposit(750);

console.log("Wallet balance:", wallet.getBalance());
