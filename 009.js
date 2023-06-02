var lengthOfLastWord = function(s) {
    let arr = s.split(" ")
    let result = 0
    console.log(arr)
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] !== '') {
            console.log(arr[i],i)
            result=arr[i].length
            break;
        }
    }
    return result
};

console.log(lengthOfLastWord("abc"))