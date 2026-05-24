class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = '';
        let i = 0;
        while (i < word1.length || i < word2.length) {
            if (word1[i]) {
                result += word1[i];
            }
            if (word2[i]) {
                result += word2[i]
            }
            i++;
        }
        return result
    }
}
