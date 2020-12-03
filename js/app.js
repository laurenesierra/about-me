'use strict';


//prompt for username
var userName = prompt('Hi! What\'s your name?').toLowerCase();
//console.log('The user name is ' + userName);

//Greeting
alert('Welcome ' + userName + ', to my "About Me" page. Would you like to take a quick quiz?');

//1st question
var residence = prompt('Do I live in the PNW? Yes or No?').toLowerCase();
//console.log(residence);
if (residence === 'yes' || residence === 'y') {
alert('That\'s correct! Nice job!');
} else {
  alert('Sorry, wrong answer!');
}

//2nd question
var favoriteColor = prompt('Is pink one of my favorite colors? Yes or No?').toLowerCase();
//console.log(favoriteColor);
if (favoriteColor === 'yes' || favoriteColor === 'y') {
alert('You got it!');
} else {
  alert('Sorry, wrong answer!');
}

//3rd question
var hiddenTalent = prompt('Can I whistle? Yes or No?').toLowerCase();
//console.log(hiddenTalent);
if (hiddenTalent === 'yes' || hiddenTalent === 'y') {
alert('You guessed it!');
} else {
  alert('Sorry, wrong answer!');
}

//4th question
var instrument = prompt('Did I play the violin growing up? Yes or No?').toLowerCase();
//console.log(instrument);
if (instrument === 'yes' || instrument === 'y') {
alert('Correct! Just one more!');
} else {
  alert('Sorry, wrong answer!');
}

//5th question
var teaDrinker = prompt('Am I a tea drinker? Yes or No?').toLowerCase();
//console.log(teaDrinker);
if (teaDrinker === 'yes' || teaDrinker === 'y') {
alert('Awesome job!');
} else {
  alert('Sorry, wrong answer!');
}

//6th question
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
  alert('The number is 22'); 
  
//7th question
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
