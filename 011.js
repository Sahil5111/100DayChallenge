var maxArea = function (height) {
    function min(a, b) {
        return a < b ? a : b
    }
    let length = height.length - 1
    let left = 0; let right = length
    let maxArea = 0
    let CurrentArea = 0
    let hLeft = 0; let hRight = 0
    while (left < right) {
        hLeft = height[left]; hRight = height[right]
        CurrentArea = min(hLeft, hRight) * Math.abs(left - right)
        maxArea = maxArea < CurrentArea ? CurrentArea : maxArea
        hLeft < hRight ? left++ : right--
    }
    return maxArea
};



let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// let height = [1, 1]

console.log(maxArea(height))