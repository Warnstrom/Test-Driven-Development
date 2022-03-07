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
      console.log(delimiters);
      const numbers: number[] = numbersString.split(delimiters).map((x: string) => parseInt(x));
      numbers.shift();
      const sum = numbers.reduce((a, b) => a + b);
      console.log(sum);
      return sum;
    } else {
      const sum: number = numbersString
        .split(/[\n,]/)
        .map(Number)
        .reduce((a, b) => a + b);
      return sum;
    }
  }
  static getCustomDelimiters(numbers: string) {
    const start =
      numbers.indexOf(constants.CUSTOM_DELIMITER_BEGIN) + constants.CUSTOM_DELIMITER_BEGIN.length;
    const end = numbers.indexOf(constants.CUSTOM_DELIMITER_END);
    return numbers.slice(start, end);
  }
}

