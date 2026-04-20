class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        const whiteCount = (str) => {
            const count = str.split("").reduce((total, curr) => (total += curr === "W" ? 1 : 0), 0);

            return count;
        };

        if (blocks.length <= k) {
            return whiteCount(blocks);
        }

        let bestCount = blocks.length;
        for (let i = 0; i < blocks.length; i++) {
            for (let j = 0; j < blocks.length; j++) {
                const substr = blocks.slice(i, j);
                if (substr.length === k) {
                    const count = whiteCount(blocks.slice(i, j));
                    bestCount = Math.min(bestCount, count);
                }
            }
        }
        return bestCount;
    }
}
