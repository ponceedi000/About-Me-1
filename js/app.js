'use strict'

// Prompting User for their name
let userName = prompt('Hello, what\'s your name?');
// console.log(userName);

// Greeting user with alert message after prompting them
alert('Hello ' + userName + '. Welcome to the Thunder Dome.');


// Let the quiz begin through prompt that require yes or no answers

// asking my favorite color

let colorAsk = prompt('Is my favorite color blue??').toLowerCase();

// if code to verify correct answer

if (colorAsk === 'yes' || colorAsk === 'y') {
    // console.log('user answer for color is: ' + colorAsk);
    alert('Congrats, too easy. Time for a harder one.');
} else if (colorAsk === 'no' || colorAsk === 'n') {
    // console.log('user answer for color is: ' + colorAsk);
    alert('Maybe try the other option??');
} else {
    // console.log('user answer for color is: ' + colorAsk);
    alert('Please answer yes or no. Thank you for your cooperation.')
}

let pastAsk = prompt('Did I fly helicopters for the military??').toLowerCase();

if (pastAsk === 'yes' || pastAsk === 'y') {
    // console.log('user answer for past: ' + pastAsk);
    alert('Aren\'t you a smart one');
} else if (pastAsk === 'no' || pastAsk === 'n') {
    // console.log('user answer for past: ' + pastAsk);
    alert('Guess again.')
} else {
    // console.log('user answer for past: ' + pastAsk);
    alert('Again? Please answer yes or no. Thank you for your cooperation.');
}

let futureAsk = prompt('Am I software developer?').toLowerCase();

if (futureAsk === 'yes' || futureAsk === 'y') {
    // console.log('user answer for future: ' + futureAsk);
    alert('On to the graduate level stuff!');
} else if (futureAsk === 'no' || futureAsk === 'n') {
    // console.log('user answer for future: ' + futureAsk);
    alert('Maybe, but no');
} else {
    // console.log('user answer for future: ' + futureAsk);
    alert('Seriously? Now your just doing it to be funny.')
}

let presentAsk = prompt('Is my dog is a pomeranian?').toLowerCase();

if (presentAsk === 'no' || presentAsk === 'n') {
    // console.log('user answer for present: ' + presentAsk);
    alert('Great! On the last one.');
} else if (presentAsk === 'yes' || presentAsk === 'y') {
    // console.log('user answer for present: ' + presentAsk);
    alert('Nope, not a trick question.');
} else {
    // console.log('user answer for present: ' + presentAsk);
    alert('LOL, just answer yes or no. Thank you for your cooperation.');
}

let whyAsk = prompt('Have I climbed the Tooth of Time?').toLowerCase()

if (whyAsk === 'yes' || whyASk === 'y') {
    // console.log('user answer for why: ' + whyAsk);
    alert('Aced it');
} else if (whyAsk === 'no' || whyAsk === 'n') {
    // console.log('user answer for why: ' + whyAsk);
    alert('Try again. Better luck next time');
} else {
    // console.log('user answer for why: ' + whyAsk);
    alert('Ding, ding, ding. It\'s only yes or no.');
}

function viewerName(userName){
    return document.write(userName +' ');
}

viewerName();