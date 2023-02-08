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