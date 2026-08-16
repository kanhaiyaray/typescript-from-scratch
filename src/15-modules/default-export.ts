export default class Timer {
  constructor(public seconds: number) {}

  start(): void {
    console.log(`Timer started for ${this.seconds} seconds.`);
  }
}
