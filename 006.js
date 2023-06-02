var isValid = function (s) {
    let stack = []
    if (!s.length) {
        return true
    } else {
        for (let i = 0; i < s.length; i++) {
            if (!stack.length && (s[i] === ")" || s[i] === "}" || s[i] === "]")) {
                return false
            }
            else if ((s[i] === "(" || s[i] === "{" || s[i] === "[")) {
                stack.push(s[i])
            }
            else {
                if(s[i]===")" && stack[stack.length -1] === "("){
                    stack.pop()
                }
                else if(s[i]==="}" && stack[stack.length -1] === "{"){
                    stack.pop()
                }
                else if(s[i]==="]" && stack[stack.length -1] === "["){
                    stack.pop()
                }
                else {
                    return false
                }
            }
        }
    }
    return !stack.length ? true : false
};

console.log(isValid("{"))