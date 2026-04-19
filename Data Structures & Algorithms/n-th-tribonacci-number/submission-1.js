class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    map = new Map()
    tribonacci(n) {
        if(n === 0) return 0;
        if(n === 1 || n === 2) return 1;
        if(this.map.has(n)) return this.map.get(n);
        const val = this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3);
        this.map.set(n, val);
        return val;
    }
}
