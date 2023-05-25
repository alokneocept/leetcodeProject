import { smallerNumbersThanCurrent } from "./smallerNbrThanCurrent";

describe('smallerNumbersThanCurrent', () => {
  test('count smaller numbers correctly', () => {
    expect(smallerNumbersThanCurrent([6, 1, 2, 3])).toEqual([3, 0, 1, 2]);   
    expect(smallerNumbersThanCurrent([5, 4, 3, 1])).toEqual([3, 2, 1, 0]);
    expect(smallerNumbersThanCurrent([1, 2, 3, 4])).toEqual([0, 1, 2, 3]);
    expect(smallerNumbersThanCurrent([5])).toEqual([0]);
  });

  test('for empty array', () => {
    expect(smallerNumbersThanCurrent([])).toEqual([]);
  });
});