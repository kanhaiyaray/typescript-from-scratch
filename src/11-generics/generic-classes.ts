class Backpack<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(): T | undefined {
    return this.items.pop();
  }

  count(): number {
    return this.items.length;
  }
}

const hikingBag = new Backpack<string>();

hikingBag.add("Water Bottle");
hikingBag.add("Compass");
hikingBag.add("Flashlight");

console.log("Items in backpack:", hikingBag.count());
console.log("Removed item:", hikingBag.remove());
console.log("Remaining items:", hikingBag.count());

const numberBag = new Backpack<number>();

numberBag.add(10);
numberBag.add(20);

console.log("Removed number:", numberBag.remove());
