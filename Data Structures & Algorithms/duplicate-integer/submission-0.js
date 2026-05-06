class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mapSet = new Set();
        for(let e of nums){
            if(mapSet.has(e)){
                return true
            }
            mapSet.add(e);
        }
        return false;
    }
}
