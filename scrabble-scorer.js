// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");


const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {

   word = word.toUpperCase();
   let letterPoints = "";
   let pointNumbers = []
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            pointNumbers.push(Number(pointValue));
            totalScore += pointNumbers[i]
         }
      }
   }
   console.log(letterPoints);
   console.log(`Total Score for ${word} = ${totalScore}`);
   return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word: ");

   return word;
};

let newPointStructure = transform(oldPointStructure);

let simpleScorer = function (word) {

   word = word.toUpperCase();
   let letterPoints = "";
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {
      totalScore += 1;
   }
   letterPoints = `Total Score for ${word} = ${totalScore}`;
   console.log(letterPoints);
   return totalScore;
};

let vowelBonusScorer = function (word) {

   let vowels = ['A', 'E', 'I', 'O', 'U'];

   word = word.toUpperCase();
   let letterPoints = '';
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {

      if (vowels.includes(word[i])) {
         totalScore += 3;
      } else {
         totalScore += 1;
      }

   }
   letterPoints = `Total Score for ${word} = ${totalScore}`;
   console.log(letterPoints);
   return totalScore;
};

let scrabbleScorer = function (word) {

   word = word.toLowerCase();
   let letterPoints = "";
   let pointNumbers = []
   let totalScore = 0;


   for (let i = 0; i < word.length; i++) {

      for (const letter in newPointStructure) {

         if (newPointStructure[letter].includes(word[i])) {
            // PROBLEM: letter's type is a number (b/c it's the value held in the key), so can't compare it to word[i]'s letters
            // QUESTION: How do you just access the key and not the value it holds?
            // Just out of curiosity, why does this need to be an 'if' statement?  (Or if this doesn't, why is the original oldScrabbleScorer's setup with an 'if' statement?)

            pointNumbers.push(Number(letter));  
            // don't think need Number anymore b/c already turned newPointStructure's values to be numbers, not strings
            totalScore += pointNumbers[i];
         }
      }
   }

   letterPoints = `Total Score for ${word} = ${totalScore}`;
   console.log(letterPoints);
   return totalScore;
};

const scoringAlgorithms = [
   {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scorerFunction: simpleScorer
   },
   {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 points, and consonants are 1 point.',
      scorerFunction: vowelBonusScorer
   },
   {
      name: 'Scrabble',
      description: 'This uses the traditional scoring algorithm.',
      scorerFunction: scrabbleScorer
   }
];

function scorerPrompt(word) {
   let whichScoringAlgorithm = input.question(`Which scoring algorithm would you like to use?:\n\tEnter '0' for ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n\tEnter '1' for ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n\tEnter '2' for ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\n`);

   if (whichScoringAlgorithm === '0') {
      console.log('\n\nSimple Score:\n');
      return simpleScorer(word);
   } else if (whichScoringAlgorithm === '1') {
      console.log('\n\nBonus Vowels:\n');
      return vowelBonusScorer(word);
   } else if (whichScoringAlgorithm === '2') {
      console.log('\n\nScrabble:\n');
      return scrabbleScorer(word);
   }
}


function transform(oldPointStructure) {

   const newPointValues = {};

   for (const pointValue in oldPointStructure) {

      for (let i = 0; i < oldPointStructure[pointValue].length; i++) {

         newPointValues[oldPointStructure[pointValue][i].toLowerCase()] = parseInt(pointValue);

      }

   }
   // console.log('New Point Values: ', newPointValues);
   return newPointValues;
}


function runProgram() {
   // oldScrabbleScorer(word);
   // simpleScorer(word);
   // vowelBonusScoreFinder(word);
   let word = initialPrompt();
   scorerPrompt(word);
   transform(oldPointStructure);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};