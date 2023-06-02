var longestCommonPrefix = function (strs) {
    let prefix = strs[0]
    strs.forEach(element => {
        if (!element.length) {
            prefix = ""
            return prefix
        }
        for (let i = 0; i < element.length; i++) {
            if (prefix[i] === element[i]) {
                if (element.length === i + 1) {
                    prefix = element
                }
                continue
            } else {
                prefix = prefix.slice(0, i)
                break
            }
        }
    });
    return prefix
};



console.log(longestCommonPrefix(["abab",  "","aba"]))
