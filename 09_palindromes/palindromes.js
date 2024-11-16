const palindromes = function (inputValue) {

    function removeAlpha(str) {
        return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }
    
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    const processedInput = removeAlpha(inputValue);
    const reversedInput = reverseString(processedInput);
    
    if (processedInput === reversedInput) {
            return true;
        } else {
            return false;
        }

};




// Do not edit below this line
module.exports = palindromes;
