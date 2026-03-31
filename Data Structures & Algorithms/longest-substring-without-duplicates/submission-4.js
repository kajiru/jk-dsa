class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // let seen = new Set()
        let seen = new Map(); // ch --> index

        let l = 0
        let r = 0 

        let maxLength = 0

        while(r < s.length){
            if(seen.has(s[r])) {
                // slide from l side until NO dup exists
                // while(seen.has(s[r])) {
                //     seen.delete(s[l]);
                //     l++
                // }

                // alternatively: 
                const rIndx = seen.get(s[r])
                if(rIndx >= l) {
                    l = rIndx + 1
                }
            } 
            seen.set(s[r], r)
            maxLength = Math.max(r - l + 1, maxLength)
            r++
        }
        return maxLength

    }
}
