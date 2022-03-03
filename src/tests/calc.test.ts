import { StringCalculator } from "..";

describe("Test for Add method", () => {
  it("Should return 1 for add(1)", async () => {
    const test_1 = await StringCalculator.Add("1");
    expect(test_1).toBe(1);
  });

  it("Should return 100 for add(100)", async () => {
    const test_1 = await StringCalculator.Add("100");
    expect(test_1).toBe(100);
  });

  it("Should return 0 for add('')", async () => {
    const test_2 = await StringCalculator.Add("");
    expect(test_2).toBe(0);
  });
  it("Should return 3 for add(1,2)", async () => {
    const test_3 = await StringCalculator.Add("1,2");
    expect(test_3).toBe(3);
  });
  it("Should return 10 for add(1,2,3,4)", async () => {
    const test_4 = await StringCalculator.Add("1,2,3,4");
    expect(test_4).toBe(10);
  });
});
