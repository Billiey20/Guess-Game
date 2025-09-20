const prompt = require("prompt-sync")();

let secretNumber = Math.floor(Math.random() *10) + 1;
let attempts = 3;

while (attempts > 0){
    let guess = parseInt(prompt("Please enter a number between 1 and 10: "));

if (guess === secretNumber){
    console.log("Correct");
    break;
}
else{
    attempts--;
    console.log("WRONG GUESS, Kindly try again " + attempts);
}
}

if (attempts===0){
    console.log("The game is over!!");
    console.log("The correct number was: ", secretNumber);
}
