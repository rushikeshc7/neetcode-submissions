class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let result = new Array(n).fill(1);

        let prefix = 1
        for (let i = 0; i < n; i++) {
            result[i] = prefix;  // [1, 1, 2, 8]
            prefix *= nums[i] // 48
        }

        let suffix = 1
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= suffix; // [48, 24, 12, 8]
            suffix *= nums[i] // 48
        }
        return result;
    }
}
