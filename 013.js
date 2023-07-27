var removeElement = function (nums, val) {
    let length = nums.length
    let j = 0
    for (let i = 0; i < length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i]
        }
    }
    return j
}

let nums = [3, 2, 2, 3]; let val = 3;
// let nums = [1]; let val = 1
// let nums = [3, 3]; let val = 3
// let nums = [0, 1, 2, 2, 3, 0, 4, 2]; let val = 2
// let nums = []; let val = 2;

console.log(removeElement(nums, val));