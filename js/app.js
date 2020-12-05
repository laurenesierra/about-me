// 'use strict';


// //prompt for username
// var userName = prompt('Hi! What\'s your name?').toLowerCase();
// //console.log('The user name is ' + userName);
// var correctAnswer = 0;

// //Greeting
// alert('Welcome ' + userName + ', to my "About Me" page. Would you like to take a quick quiz?');

// //1st question
// var residence = prompt('Do I live in the PNW? Yes or No?').toLowerCase();
// //console.log(residence);
// if (residence === 'yes' || residence === 'y') {
//   correctAnswer++;
//   alert('That\'s correct! Nice job!');
// } else {
//   alert('Sorry, wrong answer!');
// }

// //2nd question
// var favoriteColor = prompt('Is pink one of my favorite colors? Yes or No?').toLowerCase();
// //console.log(favoriteColor);
// if (favoriteColor === 'yes' || favoriteColor === 'y') {
//   correctAnswer++;
//   alert('You got it!');
// } else {
//   alert('Sorry, wrong answer!');
// }

// //3rd question
// var hiddenTalent = prompt('Can I whistle? Yes or No?').toLowerCase();
// //console.log(hiddenTalent);
// if (hiddenTalent === 'yes' || hiddenTalent === 'y') {
//   correctAnswer++;
//   alert('You guessed it!');
// } else {
//   alert('Sorry, wrong answer!');
// }

// //4th question
// var instrument = prompt('Did I play the violin growing up? Yes or No?').toLowerCase();
// //console.log(instrument);
// if (instrument === 'yes' || instrument === 'y') {
//   correctAnswer++;
//   alert('Correct! Just one more!');
// } else {
//   alert('Sorry, wrong answer!');
// }

// //5th question
// var teaDrinker = prompt('Am I a tea drinker? Yes or No?').toLowerCase();
// //console.log(teaDrinker);
// if (teaDrinker === 'yes' || teaDrinker === 'y') {
//   correctAnswer++;
//   alert('Awesome job!');
// } else {
//   alert('Sorry, wrong answer!');
// }

// //6th question
// var guessNumber = 4;
// var myNumber = 22;
// for (var i = 0; i < guessNumber; i++) {
//   var userNumber = parseInt(prompt('Guess what number I\'m thinking of? Number is under 30...'));
//   if (userNumber > myNumber) {
//     alert('You\'re getting there! Guess lower!');
//   } else if (userNumber < myNumber) {
//     alert('Hmmm...a little chilly. Guess higher!');
//   } else {
//     correctAnswer++;
//     alert('You got it right! Nice Job!');
//     break;
//   }

// }
// alert('The number is 22');





// //7th question
// var favDog = ['golden retriever', 'french bulldog', 'pitbull'];
// var attempts = 0;
// var guesses = 6;
// var notAnsweredCorrectly = true;
// console.log(favDog);
// while (notAnsweredCorrectly && attempts <= guesses) {
//   attempts++;
//   var question = prompt('What is my favorite dog breed?').toLowerCase();
//   for (var k = 0; k < favDog.length; k++)
//     if (question === favDog[k]) {
//       correctAnswer++;
//       alert('You are correct!');
//       break;
//     }


//   if (notAnsweredCorrectly) {
//     alert('Sorry, wrong answer!');
//   }
// }

// alert(`Thanks for playing my guessing game! ${userName}, You got ${correctAnswer} answers correct!`);
