
let game = prompt("Oggi che gioco scegli? 1 : Palindroma 2 : PoD");
game = game.toLowerCase();
game = game.trim();

if (game === 1 || game === "palindroma"){

    // Palindroma
    
    let userWord = prompt("Scegli una parola o frase");
    
    userWord = userWord.toLowerCase();
    userWord = userWord.replace(/\s/g, ''); // Trim lascia spazi? :/
    
    let isPal = isPalindrome(userWord);
    
    console.log(isPal);
    
    
    let message = "";
    
    if (isPal){
        message = "La parola è palindroma";
    } else{
        message = "La parola NON è palindroma";
    }
    
    document.writeln(message);

} else if (game === 2 || game === "pod" || game === "pari o dispari"){

    // Pari o dispari 

    // DATI 

    let oddEvenUser = prompt("Scegli PARI o DISPARI?");
    let userNumb = prompt("Scegli un numero da 1 a 5")
    
    // NORMALIZZAZIONE

    oddEvenUser = oddEvenUser.trim();
    oddEvenUser = oddEvenUser.toLowerCase();
    let betEven = undefined;
    if (oddEvenUser === "pari"){
        betEven = true;
    } else {
        betEven = false;
    }

    userNumb = parseInt(userNumb);
    if (userNumb > 5){
        userNumb = 5;
    } else if (userNumb < 0){
        userNumb = 0;
    } else{
        alert("Ricarica la Pagina, hai fatto qualche cafonata")
    }

    // SVOLGIMENTO

    


}else{
    alert("Eh?? Prova a ricaricare la pagina e riformularti");
}
