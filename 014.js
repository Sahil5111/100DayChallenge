var searchInsert = function (nums, target) {
    let r = nums.length - 1;
    let l = 0; let mid = 0;
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            l = mid + 1
        }
        else {
            r = mid - 1
        }
    }
    if (l === r) return l > target ? l : r + 1;
    return r + 1
};

// let nums = [1, 3, 5, 6]; let target = 5
nums = [1, 3, 5, 6], target = 2

console.log(searchInsert(nums, target))