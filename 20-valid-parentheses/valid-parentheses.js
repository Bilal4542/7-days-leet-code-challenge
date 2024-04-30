/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length == 0) return null
    let stack = []

    for(let c of s){
        if(c == '(') stack.push(')')
        else if(c == '[') stack.push(']')
        else if(c == '{') stack.push('}')
        else if (stack.pop() !== c) return false
    }

        return stack.length === 0
};