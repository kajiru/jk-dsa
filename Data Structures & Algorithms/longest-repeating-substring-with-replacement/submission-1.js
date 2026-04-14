class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0, r = 0
        const count = new Map()

        let maxLen = 0;

        while (r < s.length) {
            count.set(s[r], (count.get(s[r]) || 0) + 1)
            const len = r - l + 1
            const replacementNeeded = len - Math.max(...count.values())
            if (replacementNeeded > k) {
                count.set(s[l], count.get(s[l]) - 1)
                l++
            }
            maxLen = Math.max(maxLen, r - l + 1)
            r++

        }
        return maxLen

    }
}
