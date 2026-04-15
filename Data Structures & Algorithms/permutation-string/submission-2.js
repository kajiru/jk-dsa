class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false

        const s1Freq = new Array(26).fill(0)
        const s2Freq = new Array(26).fill(0)

        for (let i = 0; i < s1.length; i++) {
            s1Freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }
        for (let i = 0; i < s1.length; i++) {
            s2Freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }

        const isMatch = () => {
            for(let i = 0; i < 26; i++){
                if(s1Freq[i] !== s2Freq[i]) return false
            }
            return true
        }

        if (isMatch()) return true;

        let l = 0, r = s1.length - 1;
        while (++r < s2.length) {
            // add char at r
            s2Freq[s2.charCodeAt(r) - 'a'.charCodeAt(0)]++

            // remove s2[l] from s2Map to ensure window size is fixed
            s2Freq[s2.charCodeAt(l) - 'a'.charCodeAt(0)]--
            l++

            // if l --> r Map matches s1map , return true;
            if (isMatch()) return true;

        }
        return false;
    }
}
