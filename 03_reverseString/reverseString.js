const reverseString = function(phrase) {
    phrase.split("");
    let reversedPhrase = "";
    let characterCount = phrase.length;
    for(let i = characterCount - 1; i >= 0; i--){
        reversedPhrase += phrase[i];
    }
    return reversedPhrase;
};

// Do not edit below this line
module.exports = reverseString;
