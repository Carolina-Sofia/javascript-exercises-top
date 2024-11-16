const removeFromArray = function(array, ...valuesToRemove) {
    for (const value of valuesToRemove) {
        let index;
        while ((index = array.indexOf(value)) !== -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

module.exports = removeFromArray;

// Do not edit below this line
module.exports = removeFromArray;
