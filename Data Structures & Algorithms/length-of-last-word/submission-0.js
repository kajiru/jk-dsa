class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const words = s.split(" ").filter(w => w !== "");
        return words[words.length -1].length;
    }
}
