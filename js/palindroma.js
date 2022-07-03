//chiedere una parola all'utente
//creare una nuova stringa con la parola girata
//verificare se le due parole sono uguali e consegnare il risultato

const userWord = prompt('inserisci una parola', 'marco').trim();
console.log(userWord);

function isPalindrome(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    console.log(reversedWord);

    return word === reversedWord;
};

let message = `La parola ${userWord} `;

message += isPalindrome(userWord) ? 'è palindroma!' : 'non è palindroma';

console.log(message);