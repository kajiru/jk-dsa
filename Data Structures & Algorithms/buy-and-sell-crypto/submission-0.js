class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for (let i = 0; i < prices.length; i++) {
            const curPrice = prices[i];
            const curProfit = curPrice - Math.min(...prices.slice(0, i));
            if (curProfit > maxProfit) {
                maxProfit = curProfit;
            }   
        }
        return maxProfit;
    }
}
