/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const len = nums.length;
    let maxReach = 0; 

    for (let i = 0; i < len; i++) {
        if (i > maxReach) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= len - 1) {
            return true;
        }
    }
    return false;
};