class Solution {
    whiteCount = (str) => {
        const count = str.split("").reduce((total, curr) => (total += curr === "W" ? 1 : 0), 0)
        console.log('wC: ', str, count);
        return count;
    };
    minColorsBrute = (blocks, k) => {
        let bestCount = blocks.length;
        for (let i = 0; i < blocks.length; i++) {
            for (let j = 0; j < blocks.length; j++) {
                const substr = blocks.slice(i, j);
                if (substr.length === k) {
                    const count = this.whiteCount(blocks.slice(i, j));
                    bestCount = Math.min(bestCount, count);
                }
            }
        }
        return bestCount;
    };

    minColorsOptimal = (blocks, k) => {
        let wCountInRange = 0;
        for(let i = 0; i < k; i++){
            if(blocks[i] === 'W') wCountInRange++;
        }

        let res = wCountInRange; // in first k
        let r = k;
        while (r < blocks.length) {
            const leaving = blocks[r - k]; 
            const entering = blocks[r];

            if(leaving === 'W'){
                wCountInRange-- 
            }
            if(entering === 'W'){
                wCountInRange++
            }
            res = Math.min(res, wCountInRange);
            r++;
        }
        return res;
    };

    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        if (blocks.length <= k) {
            return this.whiteCount(blocks);
        }
        // return this.minColorsBrute(blocks, k);
        return this.minColorsOptimal(blocks, k);
        
    }
}
