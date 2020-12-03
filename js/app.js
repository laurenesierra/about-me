'use strict';


//prompt for username
function userInput(){
  var userName = prompt('Hi! What\'s your name?').toLowerCase();
}
userInput();
//console.log('The user name is ' + userName);

//Greeting
function alert(){
  alert('Welcome ' + userName + ', to my "About Me" page. Would you like to take a quick quiz?');
}
alert();

//1st question
function pnw(){
  var residence = prompt('Do I live in the PNW? Yes or No?').toLowerCase();
}
pnw();

//console.log(residence);
function washington(){
if (residence === 'yes' || residence === 'y') {
  alert('That\'s correct! Nice job!');
} else {
  alert('Sorry, wrong answer!');
}
}
washington();

//2nd question
function pink(){
var favoriteColor = prompt('Is pink one of my favorite colors? Yes or No?').toLowerCase();
//console.log(favoriteColor);
if (favoriteColor === 'yes' || favoriteColor === 'y') {
  alert('You got it!');
} else {
  alert('Sorry, wrong answer!');
}
}
pink();

//3rd question
function talent(){
var hiddenTalent = prompt('Can I whistle? Yes or No?').toLowerCase();
//console.log(hiddenTalent);
if (hiddenTalent === 'yes' || hiddenTalent === 'y') {
  alert('You guessed it!');
} else {
  alert('Sorry, wrong answer!');
}
}
talent();

//4th question
function violin(){
var instrument = prompt('Did I play the violin growing up? Yes or No?').toLowerCase();
//console.log(instrument);
if (instrument === 'yes' || instrument === 'y') {
  alert('Correct! Just one more!');
} else {
  alert('Sorry, wrong answer!');
}
}
violin();

//5th question
function tea(){
var teaDrinker = prompt('Am I a tea drinker? Yes or No?').toLowerCase();
//console.log(teaDrinker);
if (teaDrinker === 'yes' || teaDrinker === 'y') {
  alert('Awesome job!');
} else {
  alert('Sorry, wrong answer!');
}
}
tea();

//6th question
function number(){
var guessNumber = 4;
var myNumber = 22;
for (var i = 0; i < guessNumber; i++) {
  var userNumber = parseInt(prompt('Guess what number I\'m thinking of?'));
  if (userNumber > myNumber) {
    alert('You\'re getting there! Guess lower!');
  } else if (userNumber < myNumber) {
    alert('Hmmm...a little chilly. Guess higher!');
  } else {
     alert('You got it right! Nice Job!');
     break;
  }   
}
}
number();

function alert2(){
  alert('The number is 22'); 
}
alert2();
  
  
//7th question
function dog(){
  var favDog = ['golden retriever, french bulldog, pittbull'];
console.log(favDog);
for (var i = 0; i < 6; i++) {
  var question = prompt('What is my favorite dog breed?');
  if (question === favDog[i]) {
    alert('You are correct!');
  } else if (question !== favDog[i]) {
    alert('Sorry, wrong answer!');
    
  }
}
}
dog();

