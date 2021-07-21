'use strict'
let correctAnswer = '';
let userName = '';
// Prompting User for their name
function firstGreet() {
    let userName = prompt('Hello, what\'s your name?');
    // console.log(userName);

    // Greeting user with alert message after prompting them
    alert(`Hello ${userName}. Welcome to the Thunder Dome.`);
    let correctAnswer = 0;
}
firstGreet();

// Let the quiz begin through prompt that require yes or no answers

// asking my favorite color
function questionOne() {
let colorAsk = prompt('Is my favorite color blue??').toLowerCase();

// if code to verify correct answer

if (colorAsk === 'yes' || colorAsk === 'y') {
    // console.log('user answer for color is: ' + colorAsk);
    alert('Congrats, too easy. Time for a harder one.');
    correctAnswer = correctAnswer +1;
} else if (colorAsk === 'no' || colorAsk === 'n') {
    // console.log('user answer for color is: ' + colorAsk);
    alert('Maybe try the other option??');
} else {
    // console.log('user answer for color is: ' + colorAsk);
    alert('Please answer yes or no. Thank you for your cooperation.')
}
}
questionOne();

function questionTwo() {
let pastAsk = prompt('Did I fly helicopters for the military??').toLowerCase();

if (pastAsk === 'yes' || pastAsk === 'y') {
    // console.log('user answer for past: ' + pastAsk);
    alert('Aren\'t you a smart one.');
    correctAnswer = correctAnswer +1;
} else if (pastAsk === 'no' || pastAsk === 'n') {
    // console.log('user answer for past: ' + pastAsk);
    alert('Guess again.')
} else {
    // console.log('user answer for past: ' + pastAsk);
    alert('Again? Please answer yes or no. Thank you for your cooperation.');
}
}
questionTwo();

function questionThree() {
let futureAsk = prompt('Am I software developer?').toLowerCase();

if (futureAsk === 'yes' || futureAsk === 'y') {
    // console.log('user answer for future: ' + futureAsk);
    alert('On to the graduate level stuff!');
    correctAnswer = correctAnswer +1;
} else if (futureAsk === 'no' || futureAsk === 'n') {
    // console.log('user answer for future: ' + futureAsk);
    alert('Maybe, but no.');
} else {
    // console.log('user answer for future: ' + futureAsk);
    alert('Seriously? Now your just doing it to be funny.')
}
}
questionThree();

function questionFour() {
let presentAsk = prompt('Is my dog is a pomeranian?').toLowerCase();

if (presentAsk === 'no' || presentAsk === 'n') {
    // console.log('user answer for present: ' + presentAsk);
    alert('Great! On the last one.');
    correctAnswer = correctAnswer +1;
} else if (presentAsk === 'yes' || presentAsk === 'y') {
    // console.log('user answer for present: ' + presentAsk);
    alert('Nope, not a trick question.');
} else {
    // console.log('user answer for present: ' + presentAsk);
    alert('LOL, just answer yes or no. Thank you for your cooperation.');
}
}
questionFour();

function questionFive() {
let whyAsk = prompt('Have I climbed the Tooth of Time?').toLowerCase()

if (whyAsk === 'yes' || whyAsk === 'y') {
    // console.log('user answer for why: ' + whyAsk);
    alert('Aced it.');
    correctAnswer = correctAnswer +1;
} else if (whyAsk === 'no' || whyAsk === 'n') {
    // console.log('user answer for why: ' + whyAsk);
    alert('Try again. Better luck next time');
} else {
    // console.log('user answer for why: ' + whyAsk);
    alert('Ding, ding, ding. It\'s only yes or no.');
}
}
questionFive();

function questionSix() {
let guessNumber = prompt('Guess a number between 1 and 10.');


for (let i = 0; i < 3; i++) {
    if (guessNumber === '7') {
        alert('Hit the nail on the head.');
        correctAnswer = correctAnswer +1;
        break;
        // setting i = 5 ends the loop
    } else if (guessNumber === '6' || guessNumber === '8') {
        alert('Super Hot!!!!');
        guessNumber = prompt('Guess a number between 1 and 10');
    } else if (guessNumber === '5' || guessNumber === '9') {
        alert('Warmer');
        guessNumber = prompt('Guess a number between 1 and 10.');
    } else if (guessNumber === '4' || guessNumber === '10') {
        alert('Warm');
        guessNumber = prompt('Guess a number between 1 and 10.');
    } else {
        (guessNumber === '3' || guessNumber === '2' || guessNumber === '1')
        alert('Cold as ice.');
        guessNumber = prompt('Guess a number between 1 and 10');
    }

}
// once loop completes runs if statement
if (guessNumber != '7') {
    alert('The correct answer is 7')
}
}
questionSix();
// question seven is not complete. arrays argh.


// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

function questionSeven() {
let sevenQuest = prompt('What state(s) have I lived in for longer than a month continuously?').toLowerCase();
let sevenAnswer = ['california', 'texas', 'alabama', 'arizona', 'washington', 'ca', 'tx', 'al', 'az', 'wa'];
let guessCorrectly = false;

let attempts = 6;

while (attempts) {
    for (let i = 0; i < sevenAnswer.length; i++) {
        if (sevenQuest === sevenAnswer[i]) {
            alert(`Fun times`);
            correctAnswer = correctAnswer +1;
            guessCorrectly = true;
        }
    }
    if (guessCorrectly === true) {
        alert('You are correct.')
        break;
    }
    else {
        alert(`Guess again. You have ${attempts} remaining.`);
        sevenQuest = prompt('What state(s) have I lived in for longer than a month continuously?');
    }
    attempts--
}
}
questionSeven();

console.log(`Your correct answer count is ${correctAnswer}.`);

let score = (correctAnswer/7)*100;

alert(`Congrats, ${userName} you scored ${score.toFixed(2)}% correct.`);

