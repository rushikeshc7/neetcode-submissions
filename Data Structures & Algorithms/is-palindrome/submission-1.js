class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // TC: O(n), SC: O(n)
        let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        return str === str.split('').reverse().join('')
       
        // two pointer approach TC: O(n), SC - O(1)        
        // let left = 0;
        // let right = s.length - 1
        // while (left < right) {
        //     while (left < right && !/[a-z0-9]/i.test(s[left])) {
        //         left++;
        //     }

        //     while (left < right && !/[a-z0-9]/i.test(s[right])) {
        //         right--;
        //     }
        //     while (s[left].toLowerCase() !== s[right].toLowerCase()) {
        //         return false
        //     }
        //     left++;
        //     right--
        // }
        // return true
    }
}
