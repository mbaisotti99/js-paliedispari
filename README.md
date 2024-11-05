
## Consegna 

**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

### Consigli del giorno

1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

### Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?

---

### Svolgimento Palindroma

#### Dati

+ Parola Utente (prompt)
+ E' palindroma? (bool - variabile d'appoggio) 

#### Esecuzione Logica

1. Chiedi all'utente una parola
2. La parola è palindroma?
    + **FUNZIONE**: La parola letta al contrario è uguale a quella letta normalmente?
        + **SI**: Ritorna true 
        + **NO**: Ritorna false
3. La funzione restituisce true?
    + **SI**: La parola è palindroma
    + **NO**: La parola non è palindroma

#### Stampa

La parola è o non è palindroma

---

### Svolgimento Pari o Dispari

#### Dati

+ pariOdispari (prompt to bool) 
+ numero User (number)
+ numero IA (number)
+ isWin? (bool)

#### Esecuzione logica

1. Chiedo all'utente i due dati iniziali  pari/dispari e numero da 1 a 5
2. Trasformo la prima selezione in bool per più facile utilizzo
3. Genero numero per l'IA **FUNZIONE**
4. Sommo i due numeri
5. La somma è pari o dispari?
    + **FUNZIONE**: La somma è divisibile per 2?
        + **SI**: Numero **PARI**
        + **NO**: Numero **DISPARI**
6. Assegno il corretto valore a isWin

#### Stampa

isWin? 
+ true: Hai vinto
+ false: NON hai vinto