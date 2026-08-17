async function calculateInvoiceTotal(
  price: number,
  quantity: number
): Promise<number> {
  return price * quantity;
}

async function runInvoiceExample(): Promise<void> {
  const total = await calculateInvoiceTotal(250, 3);

  console.log("Invoice total:", total);
}

runInvoiceExample();

export {};