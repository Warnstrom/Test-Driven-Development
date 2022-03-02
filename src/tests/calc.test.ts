import { StringCalculator } from "..";

test("Test for Add method", () => {
  const test_1 = StringCalculator.Add("1");
  expect(test_1).toBe(1);

  const test_2 = StringCalculator.Add("");
  expect(test_2).toBe(0);

  const test_3 = StringCalculator.Add("1,2");
  expect(test_3).toBe(3);
});
