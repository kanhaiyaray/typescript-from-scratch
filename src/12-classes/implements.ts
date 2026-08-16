interface PrintableReport {
  title: string;
  print(): void;
}

class SalesReport implements PrintableReport {
  constructor(
    public title: string,
    private totalSales: number
  ) {}

  print(): void {
    console.log(`${this.title}: ?${this.totalSales}`);
  }
}

const report = new SalesReport(
  "August Sales Report",
  186500
);

report.print();
