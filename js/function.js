
/**
 * Is this word palindrome?
 *
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word){
    let reverse = "";
    for (let j = word.length - 1; j >= 0; j--){
        reverse += word[j]; 
    }
    console.log(`La parola al contrario è ${reverse}`);
    
    const result = word === reverse;

    return result;
    // if (word === reverse){
    //     return true;
    // } else {
    //     return false;
    // }
}

/**
 * Generate Random number between min and max
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
// function randomNumb(min, max){
//     let random = Math.floor(Math.random() * (max - min +1) + min);
//     return random;
// }

/**
 * Is this number even?
 *
 * @param {number} numb
 * @returns {boolean}
 */
function isEven(numb){
    let even;
    if (numb % 2 === 0){
        even = true;
    } else {
        even = false;
    }

    return even;
}