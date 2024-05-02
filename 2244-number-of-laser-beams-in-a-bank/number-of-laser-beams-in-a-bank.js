/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let devices = []
    for(let i = 0; i < bank.length; i++){
        let numOfLasers = bank[i].split('').filter(num => num === '1').length
        if(numOfLasers !== 0) devices.push(numOfLasers)

    }
    let beams = 0
    for(let i = 0; i < devices.length - 1; i++){
        beams += devices[i] * devices[i+1]
    }
    return beams
};