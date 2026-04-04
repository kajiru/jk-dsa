// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number[][]}
//      */
//     threeSum(nums) {
//         const sorted = nums.sort((a,b) => a - b);

//         const res = [];

//         for (let i = 0; i < sorted.length - 2; i++){
//             // skip i duplicates 
//             if(i > 0 && sorted[i] === sorted[i - 1]) continue;

//             // skip since we can't find valid sum given sorted array
//             if(sorted[i] > 0) break;

//             let left = i + 1;
//             let right = sorted.length - 1;

//             while(left < right) {
//                 const sum = sorted[i] + sorted[left] + sorted[right];
//                 if(sum === 0) {
//                     res.push([sorted[i], sorted[left], sorted[right]]);
//                     // slide both left & right 
//                     left++;
//                     right--;
//                     // skip duplicates on either side
//                     while(left < right && sorted[left] === sorted[left - 1])left++;
//                     while(left < right && sorted[right] === sorted[right +1])right--;
//                 } else if(sum < 0) {
//                     left++
//                 } else {
//                     right--;
//                 }
//             }
//         }
//         return res;
//     }
// }

class Solution {
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            const sum = numbers[l] + numbers[r]
            if (sum === target) {
                return [l, r];
            }
            if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
        return [];
    }

    setKeyStr(s) {
        return [...s].sort((a, b) => a - b).join(",");
    }

    threeSum(nums) {
        if (!nums.length) return [];
        nums.sort((a, b) => a - b);
        let res = [];
        const addedSet = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;  // optimization

            // Skip duplicate i values
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum === 0) {
                    const setKey = this.setKeyStr(new Set([nums[i], nums[l], nums[r]]));
                    if (!addedSet.has(setKey)) {
                        addedSet.add(setKey);
                        res.push([nums[i], nums[l], nums[r]]);
                    }
                    l++;
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return res;
    }
}
