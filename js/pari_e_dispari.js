function getRandomNumber(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

function isEven(number) {
    return !(number % 2);
}

let userChoice = prompt('Scegli "pari" o "dispari"').trim().toLowerCase();
while (userChoice !== 'pari' && userChoice !== 'dispari') {
    userChoice = prompt('Scegli "pari" o "dispari"').trim().toLowerCase();
}

let userNumber = parseInt(prompt('scegli un numero da 1 a 5'));
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt('scegli un numero da 1 a 5'));
}

const cpuNumber = getRandomNumber(1, 5);
console.log(cpuNumber, userNumber);

const sum = cpuNumber + userNumber;

if((isEven(sum) && userChoice === 'pari') || (!isEven(sum) && userChoice === 'dispari')) {
    console.log('vince il giocatore');
} else {
    console.log('vince il computer')
}