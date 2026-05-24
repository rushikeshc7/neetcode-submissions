class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length !== t.length) {
        return false
       }
       // count char in s
       let count = {}
       for(let char of s) {
         count[char] = (count[char] || 0) + 1
       }
       // decrease count using t
       for(let char of t) {
          if(!count[char]) {
            return false
          }
          count[char]--;
       }
       return true
    }
}
