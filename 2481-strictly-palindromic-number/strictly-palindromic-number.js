/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for(let i = 2; i <= n-2; i++){
        let str = n.toString(i)
        if(!isPalindrome(str)) return false

    }
    return true
};
 let isPalindrome = function(n) {
    return n === n.split('').reverse().join('')
 }