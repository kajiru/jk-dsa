class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        let l = 0, r = 0;
        const count = new Map();
        let maxLen = 0;
        while (r < s.length) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);

            while (count.size > 2 && l < r) {
                count.set(s[l], count.get(s[l]) - 1);
                if (count.get(s[l]) === 0) {
                    count.delete(s[l]);
                }
                l++;
            }

            maxLen = Math.max(maxLen, r - l + 1);
            r++;
        }
        return maxLen;
    }
}
