export function buildArray(nums: number[]): number[] {
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
}
const nums = [4,1,0,2,3];
const result = buildArray(nums);
console.log(result);
