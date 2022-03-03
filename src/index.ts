export class StringCalculator {
  static async Add(numbersString: string) {
    if (numbersString.length === 0) return 0;
    if (numbersString.length === 1) return parseInt(numbersString);
    const sum: number = numbersString
      .split(",")
      .map(Number)
      .reduce((a, b) => a + b);
    return sum;
  }
}
StringCalculator.Add("1,2");
