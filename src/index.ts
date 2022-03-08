enum constants {
  CUSTOM_NUMBER_LIMIT = 1000,
  CUSTOM_DELIMITER_BEGIN = "//",
  CUSTOM_DELIMITER_END = "\n",
}

export class StringCalculator {
  static Add(numbersString: string): number {
    const validateCustomDelimiters: boolean = numbersString.startsWith(
      constants.CUSTOM_DELIMITER_BEGIN
    );
    if (numbersString.length === 0) return 0;
    if (numbersString.length === 1) return parseInt(numbersString);
    if (validateCustomDelimiters) {
      const delimiters: string = this.getCustomDelimiters(numbersString);
      const numbers: number[] = numbersString.split(delimiters).map((x: string) => parseInt(x));
      numbers.shift();
      const negatives = numbers.filter((x) => x == 0 || x > 0);
      if (negatives.length) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
      } else {
        const sum = numbers.reduce((a, b) => a + b);
        console.log(sum);
        return sum;
      }
    } else {
      const numbers: number[] = numbersString.split(/[\n,]/).map(Number);
      const negatives = numbers.filter((x) => x == 0 || x > 0);
      if (negatives.length) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
      } else {
        const sum = numbers.reduce((a, b) => a + b);
        return sum;
      }
    }
  }
  static getCustomDelimiters(numbers: string) {
    const start =
      numbers.indexOf(constants.CUSTOM_DELIMITER_BEGIN) + constants.CUSTOM_DELIMITER_BEGIN.length;
    const end = numbers.indexOf(constants.CUSTOM_DELIMITER_END);
    return numbers.slice(start, end);
  }
}
console.log(StringCalculator.Add("1,-2"));
