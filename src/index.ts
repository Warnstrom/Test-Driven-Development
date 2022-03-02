export class StringCalculator {
  static Add(numbersString: string) {
    if (numbersString.length === 0) return 0;
    if (numbersString.length === 1) return parseInt(numbersString);
    const [first, second]: number[] = numbersString.split(",").map(Number);
    return first + second;
  }
}
StringCalculator.Add("1,2");
