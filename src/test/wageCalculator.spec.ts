import { wageCalculator } from "../wageCalculator";

describe("wageCalculator", () => {
  it("Case 1: Not a leap year, mon, wed, no work level", () => {
    expect(wageCalculator(2023, ["mon", "wed"])).toStrictEqual(170);
  });

  it("Case 2: Not a leap year, wrong day, no work level", () => {
    expect(wageCalculator(2023, ["wrong"])).toStrictEqual(0);
  });
  
  it("Case 3: Not a leap year, every day, no work level", () => {
    expect(wageCalculator(2023, ["mon","tue", "wed", "thu", "fri", "sat", "sun"])).toStrictEqual(930);
  });

  it("Case 4: Not a leap year, tue, director", () => {
    expect(wageCalculator(2023, ["tue"], "director")).toStrictEqual(110);
  });

  it("Case 5: Not a leap year, tue, fri, manager", () => {
    expect(wageCalculator(2023, ["tue","fri"], "manager")).toStrictEqual(180);
  });

  it("Case 5: leap year, every day, no work level", () => {
    expect(wageCalculator(2020, ["mon","tue", "wed", "thu", "fri", "sat", "sun"])).toStrictEqual(1116);
  });


  //...
});
