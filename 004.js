var isPalindrome = function(x) {
    let str = JSON.stringify(x)
    let reverse = str.split("")
    reverse = reverse.reverse()
    reverse=reverse.join("")
    return str === reverse
};

console.log(isPalindrome(10))