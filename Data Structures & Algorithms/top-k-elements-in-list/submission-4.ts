class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // 1. create a hashMap for calculate the count of each element in the array
        const map = new Map<number, number>();
        for(let n of nums){
            map.set(n, (map.get(n) ?? 0) + 1);
        }
        // 2. create a array with nums indexs
        let freq = [];
        for(let i in nums){
            freq.push([]);
        }
        for(let [key, value] of map){
            freq[value - 1].push(key); 
        }
        const result = [];
        for(let i = nums.length - 1; i >= 0;i--){
            if(freq[i].length !== 0){
                result.push(...freq[i]);
                if(result.length === k){
                    return result;
                }
            }
        }
        return result;
    }
        
}
