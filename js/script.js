
let game = prompt("Oggi che gioco scegli? 1 : Palindroma 2 : PoD");
game = game.toLowerCase();
game = game.trim();
let message;

if (game == 1 || game === "palindroma"){

    // Palindroma
    
    let userWord = prompt("Scegli una parola o frase");
    
    // NORMALIZZAZIONE
    
    userWord = userWord.toLowerCase();
    userWord = userWord.replace(/\s/g, '');
    if (userWord === ""){
        alert("Ci hai provato, ricarica la pagina e sarai più fortunato, anzi spe faccio io")
        location.reload();
    }
    let isPal = isPalindrome(userWord);
    
    
    console.log(isPal);
    
    
    
    if (isPal){
        message = "La parola è palindroma";
    } else{
        message = "La parola NON è palindroma";
    }
    
    document.writeln(message);

} else if (game == 2 || game === "pod" || game === "pari o dispari"){

    // Pari o dispari 

    // DATI 

    let oddEvenUser = prompt("Scegli PARI -1- o DISPARI -2- ?");
    let userNumb = prompt("Scegli un numero da 1 a 5")

    let iaNumber = (min, max) => Math.floor(Math.random() * (max - min +1) + min);
    let iaNumb = iaNumber(1,5);
    let somma;
    let betEven;
    let isWin;
    let even;
    
    // NORMALIZZAZIONE

    oddEvenUser = oddEvenUser.trim();
    oddEvenUser = oddEvenUser.toLowerCase();

    if (oddEvenUser === "pari" || oddEvenUser == 1){
        betEven = true;
    } else if (oddEvenUser === "dispari" || oddEvenUser == 2){
        betEven = false;
    } else{
        alert("Siamo proprio simpatici oggi vedo! Per stavolta ricaricherò la pagina per te")
        location.reload();
    }

    userNumb = parseInt(userNumb);
    // console.log(`Questo è ${userNumb}`);
    
    if (userNumb > 5){
        userNumb = 5;
    } else if (userNumb < 0){
        userNumb = 0;
    } else if (userNumb === ""){
        alert("Ricarico la Pagina, hai fatto qualche cafonata");
        location.reload();
    }

    // SVOLGIMENTO

    // console.log(userNumb);
    // console.log(betEven);
    // console.log(iaNumb);
    

    somma = userNumb + iaNumb;
    // console.log(somma);
    
    even = isEven(somma);

    if (even === betEven){
        isWin = `Hai VINTO nonostante tutto!`;
    } else{
        isWin = "Hai PERSO, dovresti vergognarti! :( ";
    }

    console.log(`Hai scelto ${userNumb}, l'IA sceglie ${iaNumb}, chi vincerà?`);
    console.log(`La somma tra i numeri è ${somma}`);
    
    
    console.log(isWin);
    document.writeln(isWin);
    
    
}else{
    alert("Eh?? Proviamo a ricaricare la pagina e riformulati");
    location.reload();
}

document.writeln("Se vuoi giocare ancora ricarica la pagina :D");
