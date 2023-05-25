export function createarrArray(nums: number[], index: number[]): number[] {
    const arr: number[] = [];  
    for (let i = 0; i < nums.length; i++) {
      arr.splice(index[i], 0, nums[i]);
    }
    return arr;
  }
  const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];

const target = createarrArray(nums, index);
console.log(target);