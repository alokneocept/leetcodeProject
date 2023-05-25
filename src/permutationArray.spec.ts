import { buildArray } from "./permutationArray";

describe('permutationalArray', () => {
  test('correctly create the array', () => {
        expect(buildArray([0, 1, 2, 3])).toEqual([0, 1, 2, 3]);  
    expect(buildArray([1, 3, 0, 2])).toEqual([3, 2, 1, 0]);
    expect(buildArray([3, 2, 1, 0])).toEqual([0, 1, 2, 3]);
  });

  test('for empty array', () => {
    expect(buildArray([])).toEqual([]);
  });
});