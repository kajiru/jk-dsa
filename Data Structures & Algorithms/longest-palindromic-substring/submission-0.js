class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        let len = 0;
        let longestStrRange = [0,0]; 

        for(let i = 0; i < s.length; i++){
            let l = i;
            let r = i; 

            while(l >=0 && r < s.length && s[r] === s[l]){
                if((r - l + 1) > len){
                    len = r - l + 1;
                    console.log('updating', l, r)
                    longestStrRange = [l, r];
                }
                l--;
                r++;
            }

            l = i;
            r = i+1;
            while(l >=0 && r < s.length && s[r] === s[l]){
                if((r - l + 1) > len){
                    len = r - l + 1;
                    longestStrRange = [l, r];
                }
                l--;
                r++;
            }
        }
        console.log(longestStrRange)
        return s.slice(longestStrRange[0], longestStrRange[1] + 1);
    }
}
