interface Invoice {
  invoiceNumber: string;
  total: number;
}

interface Shipment {
  trackingCode: string;
  weight: number;
}

function isInvoice(value: Invoice | Shipment): value is Invoice {
  return "invoiceNumber" in value;
}

function displayRecord(record: Invoice | Shipment): void {
  if (isInvoice(record)) {
    console.log(
      `Invoice ${record.invoiceNumber}: ?${record.total}`
    );
  } else {
    console.log(
      `Shipment ${record.trackingCode}: ${record.weight} kg`
    );
  }
}

const invoice: Invoice = {
  invoiceNumber: "INV-8031",
  total: 12450
};

const shipment: Shipment = {
  trackingCode: "TRK-6148",
  weight: 7.5
};

displayRecord(invoice);
displayRecord(shipment);
