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
   // console.log(pointNumbers);
   console.log(`Total Score for ${word} = ${totalScore}`);
   return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(word) {
   word = input.question("Let's play some scrabble! Enter a word: ");

   return word;
};

let newPointStructure = {
   A: 1,
   B: 3,
   C: 3,
   D: 2,
   E: 1,
   F: 4,
   G: 2,
   H: 4,
   I: 1,
   J: 8,
   K: 5,
   L: 1,
   M: 3,
   N: 1,
   O: 1,
   P: 3,
   Q: 10,
   R: 1,
   S: 1,
   T: 1,
   U: 1,
   V: 4,
   W: 4,
   X: 8,
   Y: 4,
   Z: 10
};

// console.log("Scrabble scoring values for");
// console.log("letter a: ", newPointStructure.A);
// console.log("letter j: ", newPointStructure.J);
// console.log("letter z: ", newPointStructure["Z"]);

let simpleScorer = function (word) {
   {
      1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
   }
   //  return this.word()
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in simpleScorer) {

         if (simpleScorer[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`

         }
      }
   }
   console.log(letterPoints);
   return letterPoints;
};

// function simpleScoreFinder(word) {
//    word = word.toUpperCase();
//    let letterPoints = "";
//    let pointNumbers = []
//    let totalScore = 0;

//    for (let i = 0; i < word.length; i++) {

//       for (const pointValue in simpleScorer) {

//          if (simpleScorer[pointValue].includes(word[i])) {
//             letterPoints += `Points for '${word[i]}': ${pointValue}\n`
//             pointNumbers.push(Number(pointValue));
//             totalScore += pointNumbers[i]
//          }

//       }
//    }
//    console.log(letterPoints);
//    console.log(`Total Score for ${word} = ${totalScore}`);
//    return letterPoints;
// }

let vowelBonusScorer = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U'],
};

function vowelBonusScoreFinder(word) {
   word = word.toUpperCase();
   let letterPoints = "";
   let pointNumbers = []
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in vowelBonusScorer) {

         if (vowelBonusScorer[pointValue].includes(word[i])) {
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

let scrabbleScorer;

// let optionOne = {
//    name: 'Simple Score', 
//    description: 'Each letter is worth 1 point.',
//    scorerFunction: simpleScoreFinder
// };

// let optionTwo = {
//    name: 'Bonus Vowels', 
//    description: 'Vowels are 3 points, and consonants are 1 point.',
//    scorerFunction: vowelBonusScoreFinder
// };

// let optionThree = {
//    name: 'Scrabble',
//    description: 'This uses the traditional scoring algorithm.',
//    scorerFunction: oldScrabbleScorer
// }; 

const scoringAlgorithms = [
   {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scorerFunction: simpleScoreFinder
   },
   {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 points, and consonants are 1 point.',
      scorerFunction: vowelBonusScoreFinder
   },
   {
      name: 'Scrabble',
      description: 'This uses the traditional scoring algorithm.',
      scorerFunction: oldScrabbleScorer
   }
];
// scoringAlgorithms.push(optionOne, optionTwo, optionThree);

function scorerPrompt(word) {
   let whichScoringAlgorithm = input.question(`Which scoring algorithm would you like to use?:\n\tEnter '0' for ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n\tEnter '1' for ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n\tEnter '2' for ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\n`);

   if (whichScoringAlgorithm === '0') {
      console.log('\n\nSimple Score:\n');
      simpleScoreFinder(word);
   } else if (whichScoringAlgorithm === '1') {
      console.log('\n\nBonus Vowels:\n');
      vowelBonusScoreFinder(word);
   } else if (whichScoringAlgorithm === '2') {
      console.log('\n\nScrabble:\n');
      oldScrabbleScorer(word);
   }
}

function transform(oldPointStructure) {
   let lowerCase = [];
   // let upperCase = ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
   for (const number in oldPointStructure) {

      for (let i = 0; i < oldPointStructure[number].length; i++) {

         lowerCase.push(oldPointStructure[number][i]);

         // Push to an array so that can use toLowerCase function, then put back in object to return
         // Currently putting all letters into one array, instead of iterating through one key only.  Trying to convert string of each key into an array so that can use toLowerCase on it.  Then convert back to Object. 
         // OR could leave as one array, turn to string, create a loop to make it lowercase, separate out into arrays, then put those arrays back into an object. 


         // Don't think I'm using anything directly below, but keeping for the moment, just in case.  
         // if (oldPointStructure[letter][i].includes(upperCase)) {
         //       lowerCase += oldPointStructure[number][i].toLowerCase();
         //       oldPointStructure[number] = lowerCase;
         //       console.log(oldPointStructure[number]); 
         //       console.log(lowerCase);
         //       console.log('inside', oldPointStructure[number]);
         //    }
      }

      // for (let i = 0; i < lowerCase.length; i++) {
      //    lowerCase;

      // }
      console.log(lowerCase);
      // console.log(oldPointStructure);
   }
   return oldPointStructure;
}

function runProgram() {
   initialPrompt();
   // oldScrabbleScorer(word);
   simpleScorer(word);
   // vowelBonusScoreFinder(word);
   scorerPrompt(scoringAlgorithms);
   // transform(oldPointStructure);
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