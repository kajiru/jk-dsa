class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = "";
        const w1Len = word1.length, w2Len = word2.length;

        let i = 0;
        let j = 0;
        let cur = 0;
        while(i < w1Len && j < w2Len){
            if(cur % 2 === 0) {
                res += word1[i];
                i++;
            }else {
                res += word2[j];
                j++
            }
            cur++;
        }
        console.log('res', res);
        if(i < w1Len){
            res += word1.slice(i);
        }
        if(j < w2Len){
            res += word2.slice(j);
        }
        return res;
    }
}
