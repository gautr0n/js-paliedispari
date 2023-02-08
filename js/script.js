//palindroma
const word = prompt(`inserire una parola`);
console.log(word);

palindrome (word);

function palindrome (wordTest){
    let wordPal = ``;
    for (let i = wordTest.length ; i >= 0 ; i--){
        wordPal += wordTest.toLowerCase().charAt(i);
    }
    if (wordPal === word.toLowerCase()){
        console.log(`la parola inserita è palindroma`);
        console.log(word);
        console.log(wordPal);
    } else {
        console.log(`la parola inserita non è palindroma`);
        console.log(word);
        console.log(wordPal);
    }
}

//pari e dispari

//1 generare due numeri random
const diceResult = [];

for (let i = 0 ; i < 2 ; i++){
    diceResult.push(diceRoll());
    console.log(diceResult[i]);
}

if (diceResult[0] > diceResult[1]){
    console.log("il giocatore ha vinto");
} else if (diceResult[0] < diceResult[1]){
    console.log("il giocatore ha perso");
} else {
    console.log("il giocatore ha pareggiato");
}

function diceRoll (){
    let diceNumber = Math.floor(Math.random() * 6 + 1);
    return diceNumber;
}