class Solution {
    /**
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    countOdds(low, high) {
        // odd betwen 0 and n --> Math.floor((n + 1)/2)
        const countToHigh = Math.floor((high + 1) / 2)
        const countToLow = Math.floor((low) / 2) // count to low - 1
        return countToHigh - countToLow
    }
}
