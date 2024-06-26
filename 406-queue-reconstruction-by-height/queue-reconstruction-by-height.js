/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a,b) => (a[0] !== b[0]) ? b[0]-a[0] : a[1]-b[1]);
    let res = [];
    for (let i = 0; i < people.length; i++) {
        let insertIdx = people[i][1];
        res.splice(insertIdx, 0, people[i]);
    }
    return res;
};