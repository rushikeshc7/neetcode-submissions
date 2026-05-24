class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = {};
        const n = nums.length;

        for (const num of nums) {
            if (!map[num]) {
                map[num] = 1;
            } else {
                map[num] += 1;
            }

            if (map[num] > n / 2) {
                return num;
            }
        }

        return -1
    }
}
