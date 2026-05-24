class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let uniqueNums = new Set(nums);
        return uniqueNums.size !== nums.length
    }
}
