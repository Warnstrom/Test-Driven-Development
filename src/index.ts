export class StringCalculator {
  static Add(numbersString: string): number {
    if (numbersString.length === 0) return 0;
    if (numbersString.length === 1) return parseInt(numbersString);
    const sum: number = numbersString
      .split(/[\n,]/)
      .map(Number)
      .reduce((a, b) => a + b);
    return sum;
  }
}
