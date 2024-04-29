/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length == 0) return 0;
    let lastWord = s.trim().split(' ');
    return lastWord[lastWord.length - 1].length
};