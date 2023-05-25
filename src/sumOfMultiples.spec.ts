import { sumOfMultiples } from "./sumOfMultiples";

describe('sumOfMultiples', () => {
  test('return the correct sum of multiples', () => {
    expect(sumOfMultiples(10)).toBe(40);
    expect(sumOfMultiples(20)).toBe(119);
  expect(sumOfMultiples(0)).toBe(0);
    expect(sumOfMultiples(1)).toBe(0);
  });
});
