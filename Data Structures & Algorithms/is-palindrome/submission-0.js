class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const allowed = new Set(
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
        );

        const str_arr = s.split('').filter((s) => allowed.has(s));
        
        let start = 0;
        let end = str_arr.length - 1; 

        while (start <= end) {
            if (str_arr[start].toLocaleLowerCase() !== str_arr[end].toLocaleLowerCase()) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
}
