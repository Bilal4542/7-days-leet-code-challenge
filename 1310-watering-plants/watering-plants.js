/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    // brute force approach
    let currentCap = capacity
    let currentSteps = 0;
    let steps = 0;
    for(let i = 0; i < plants.length; i++){
        if(currentCap < plants[i] ){
            steps +=  2 * currentSteps;
            currentCap = capacity;
        }

        currentCap -= plants[i];
        currentSteps += 1;
        steps += 1;
    }   
    return steps; 
};