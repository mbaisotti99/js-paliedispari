
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