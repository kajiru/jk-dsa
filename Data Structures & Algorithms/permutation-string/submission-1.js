class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Map = new Map();
        for (let i = 0; i < s1.length; i++) {
            s1Map.set(s1[i], (s1Map.get(s1[i]) | 0) + 1)
        }

        const s2Map = new Map();
        let l = 0, r = s1.length - 1;
        for (let i = 0; i <= r; i++) {
            s2Map.set(s2[i], (s2Map.get(s2[i]) | 0) + 1)
        }

        const isContained = (m1, m2) => {
            if (m1.size > m2.size) return false;
            return [...m1.entries()].every(e => {
                const ch = e[0];
                const count = e[1];
                return m2.has(ch) && m2.get(ch) >= count;
            })
        }

        if(isContained(s1Map, s2Map)) return true;

        while (++r < s2.length) {
            s2Map.set(s2[r], (s2Map.get(s2[r]) || 0) + 1)

            // remove s2[l] from s2Map to ensure window size is fixed
            s2Map.set(s2[l], s2Map.get(s2[l]) - 1)
            if (s2Map.get(s2[l]) === 0) s2Map.delete(s2[l])
            l++

            // if l --> r Map matches s1map , return true;
           if(isContained(s1Map, s2Map) ) return true;

        }
        return false;
    }
}
