var threeSum = function (nums) {
    var bs = (start, end, arr, key) => {
        let mid
        while (start <= end) {
            mid = Math.floor((start + end) / 2)
            if (arr[mid] === key) {
                return mid
            }
            else if (arr[mid] < key) {
                start = mid + 1
            }
            else {
                end = mid - 1
            }
        }
        return null
    }
    nums = nums.sort((a, b) => (a - b))
    let length = nums.length
    let output = []
    let set = new Set()
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            let third = bs(j + 1, length, nums, -1 * (nums[i] + nums[j]))
            if (third === null) continue;
            let val = `[${nums[i]}, ${nums[j]}, ${nums[third]}]`
            if (!set.has(val)) {
                set.add(val)
                output.push([nums[i], nums[j], nums[third]])
            }
        }
    }

    return output
};

// let input = [-1, 0, 1, 2, -1, -4]
let input = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0] //-2,1,1
// let input = [0, 0, 0, 0]
// let input = [-2, 0, 1, 1, 2]
console.log(threeSum(input));