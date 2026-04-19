class Solution {
    bs = (arr, t) => {
        let l = 0,
            r = arr.length - 1;
        let res = false;
        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            if (arr[m] === t) {
                res = true;
                break;
            }
            if (arr[m] > t){
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        // console.log('bs for ', t, arr, res);
        return res;
    };

    existsInAll = (arr, t) => {

    }
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    smallestCommonElement(mat) {
        const potentialAnswers = mat[0];

        let resIndex = -1;
        for (let i = 0; i < potentialAnswers.length; i++) {
            let currRow = 1;
            let isContainedInAllRows = true;
            while (currRow < mat.length) {
                const isInRow = this.bs(mat[currRow], potentialAnswers[i]);
                if (!isInRow) {
                    isContainedInAllRows = false;
                    break;
                };
                currRow++;
            }
            if (isContainedInAllRows) {
                resIndex = i;
                break;
            }
        }
        return resIndex > 0 ?  potentialAnswers[resIndex] : resIndex;
    }
}
