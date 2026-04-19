class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    timeTaken(piles, speed) {
        return piles.reduce((total, pile) => (total += Math.ceil(pile / speed)), 0);
    }
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);

        let minSpeed = r;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            const ellapsedTime = this.timeTaken(piles, m);
            if (ellapsedTime > h) {
                l = m + 1;
            } else {
                minSpeed = m;
                r = m;
            }
        }
        return minSpeed;
    }
}
