class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0; 
        let r = numbers.length - 1;

        let res = [];
        while(l <= r) {
            if(numbers[l] + numbers[r] === target){
                res = [l+1, r+1];
                break; 
            }
            if(numbers[l] + numbers[r] < target) {
                l++;
            }else {
                r--;
            }
        }
        return res;
    }
}
