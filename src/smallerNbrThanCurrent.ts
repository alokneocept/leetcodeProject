 export function smallerNumbersThanCurrent(nums: number[]): number[] {
    const ans: number[]= [];
    for(let i =0; i<nums.length;i++){
    let sum= 0;
    for(let j=0; j<nums.length;j++){
        if (nums[j]<nums[i]){
            sum++;
        }
    }
    ans.push(sum)
}
    return ans;
}
const nums = [5, 1, 0, 2];
const result = smallerNumbersThanCurrent(nums);
console.log(result);
