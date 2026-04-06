class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const count = new Map()

        for(let i = 0; i < s.length; i++){
            const ch = s.charAt(i);
            if(count.has(ch)){
                const curr = count.get(ch);
                curr.freq++;
            }else {
                count.set(ch, {freq: 1, index: i});
            }
        }
        let resIndex = s.length;
        count.forEach(ch => {
            if(ch.freq === 1)
                resIndex = Math.min(resIndex, ch.index);
        })
        return resIndex === s.length ? -1 : resIndex;
    }
}
