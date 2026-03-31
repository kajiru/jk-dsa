class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    getCountKey(str) {
        const arr = new Array(26).fill(0);
        for(let i = 0; i < str.length; i++){
            const ch = str[i];
            const indx = str.charCodeAt(i) - 97;
            arr[indx]++;
        }
        return arr.join('#');
    }

    groupAnagrams(strs) {
        const resMap = new Map();
        for(let i = 0; i < strs.length; i++) {
            const key = this.getCountKey(strs[i]);
            if (resMap.has(key)) {
                const newArr = resMap.get(key);
                newArr.push(strs[i]);
                resMap.set(key, newArr)
            } else {
                resMap.set(key, [strs[i]]);
            }
        }
        return Array.from(resMap.values());
    }
}
