class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isArmstrong(n) {
        const arr = `${n}`.split("");
        const len = arr.length;
        return arr.reduce((total, i) => total += Number(i)**len, 0) === n;
    }
}
