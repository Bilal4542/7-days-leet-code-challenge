/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s

    let n = s.length
    let charInSec = numRows * 2 - 2
    let res = ''

    for(let row = 0; row < numRows; row++){
        let i = row
        while(i < n){
            res += s[i]

            if(row != 0 && row != numRows - 1){
                let charInBetween = charInSec - 2 * row
                let secondIndex = i + charInBetween
                if(secondIndex < n) res += s[secondIndex]
            }
            i += charInSec
        }
    }
    return res
    
};