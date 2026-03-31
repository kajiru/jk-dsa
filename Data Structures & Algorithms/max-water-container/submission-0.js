class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(!Array.isArray(heights) || heights.length < 2) return 0;

        let left = 0; 
        let right = heights.length - 1;

        let max = 0;
        while (left < right) {
            const curMax = (right - left) * Math.min(heights[left], heights[right]);
            if(curMax > max) max = curMax;

            if (heights[left] > heights[right]) right--;
            else left++
        }
        return max;
    }
}
