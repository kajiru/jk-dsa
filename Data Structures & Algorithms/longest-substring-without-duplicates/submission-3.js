class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen = new Set()

        let l = 0
        let r = 0 

        let maxLength = 0

        while(r < s.length){
            if(seen.has(s[r])) {
                // slide from l side until NO dup exists
                while(seen.has(s[r])) {
                    seen.delete(s[l]);
                    l++
                }
                // maxLength = Math.max(seen.size, maxLength)
            } 
            seen.add(s[r])
            maxLength = Math.max(seen.size, maxLength)
            r++
        }
        return maxLength

    }
}
