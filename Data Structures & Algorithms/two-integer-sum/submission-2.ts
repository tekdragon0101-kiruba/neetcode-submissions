class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap = new Map();
        for(let i = 0; i < nums.length;i++){
            const value = target - nums[i]
            if(hashMap.has(nums[i])) return [hashMap.get(nums[i]), i]
            hashMap.set(value, i)
        }
        return [-1, -1]
    }
}
