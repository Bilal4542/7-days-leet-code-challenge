/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
     let  len1  =  word1.length;
  let  len2  =  word2.length;
  let matrix =[], temp =0;


  for (let i = 0; i <= len1; i++) {
    matrix[i] = [];
    matrix[i][0] = i;
  }

  for (let j = 0; j <= len2; j++) {
    matrix [ 0 ] [ j ]  =  j ;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      word1[i - 1] === word2[j - 1] ? temp = 0 : temp = 1;
      matrix[i][j] = Math.min(matrix[i-1][j] + 1, matrix[i][j-1] + 1, matrix[i-1][j-1] + temp);
    }
  }

  return matrix[len1][len2];  
};