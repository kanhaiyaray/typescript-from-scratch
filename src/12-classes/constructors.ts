class TrainTicket {
  constructor(
    public passengerName: string,
    public destination: string,
    public seatNumber: number
  ) {}

  printTicket(): void {
    console.log(`Passenger: ${this.passengerName}`);
    console.log(`Destination: ${this.destination}`);
    console.log(`Seat: ${this.seatNumber}`);
  }
}

const ticket = new TrainTicket("Arjun", "Jaipur", 42);

ticket.printTicket();
