interface StorageAdapter<T> {
  save(value: T): void;
  load(): T;
}

class NumberStorage implements StorageAdapter<number> {
  private storedValue: number = 0;

  save(value: number): void {
    this.storedValue = value;
  }

  load(): number {
    return this.storedValue;
  }
}

const storage = new NumberStorage();

storage.save(4096);

console.log("Stored number:", storage.load());

interface DateFormatter<T> {
  format(value: T): string;
}

const dateFormatter: DateFormatter<Date> = {
  format(value: Date): string {
    return value.toISOString().split("T")[0];
  }
};

console.log(
  "Formatted date:",
  dateFormatter.format(new Date("2026-08-16"))
);
