
function isPalindrome(word){
    let reverse = "";
    for (let j = word.length - 1; j >= 0; j--){
        reverse = reverse + word[j]; // Non ho trovato un modo di fare con += mi da sempre undefined
    }
    console.log(reverse);
    
    if (word === reverse){
        return true;
    } else {
        return false;
    }
}

function randomNumb(min, max){
    let random = Math.floor(Math.random() * (max - min +1) + min);
    return random;
}

function isEven(numb){
    let even;
    if (numb % 2 === 0){
        even = true;
    } else {
        even = false;
    }

    return even;
}