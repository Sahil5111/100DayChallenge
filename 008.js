let nums =[]


var removeDuplicates = function(nums) {
    if (!nums || !nums.length) {
        return 0
    }
    let temp = nums[0]
    let count = 1
    nums.forEach(element => {
        if (temp !== element) {
            temp = element
            nums[count] = element
            count++
        }
    });
    return count
};

console.log(removeDuplicates(nums),nums)