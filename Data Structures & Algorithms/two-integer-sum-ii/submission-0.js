class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0; 
        let right = numbers.length - 1;

        let res = [];
        while(left < right) {
            const sum = numbers[left] + numbers[right];
            if(sum === target) {
                res = [left+1, right+1];
                break;
            }
            if(sum < target) left++;
            else right--;
        }
        return res;
    }
}
