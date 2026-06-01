class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        let seen = new Map()
        for(let right = 0; right < s.length; right++) {
            let char = s[right];
            if(seen.has(char) && seen.get(char) >= left) {
                left = seen.get(char) + 1
            }
            seen.set(char, right)
            const length = right - left + 1
            if(length > maxLength) {
                maxLength = length;
            }
        }
        return maxLength
    }
}
