import { createarrArray } from "./orderTargetArray";

describe('createarrArray', () => {
  test('should correctly create the array', () => {
   expect(createarrArray([1, 2, 3, 4], [0, 1, 2, 3])).toEqual([1, 2, 3, 4]);

   expect(createarrArray([1, 2, 3, 4], [3, 2, 1, 0])).toEqual([4, 3, 2, 1]);
   
    expect(createarrArray([5, 6, 7], [1, 0, 2])).toEqual([6, 5, 7]);
  });

  test('for empty arrays', () => {
    
    expect(createarrArray([], [])).toEqual([]);

   expect(createarrArray([1, 2, 3], [])).toEqual([]);

    expect(createarrArray([], [0, 1, 2])).toEqual([0]);
  });
});