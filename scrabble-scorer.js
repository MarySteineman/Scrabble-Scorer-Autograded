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
         console.log(`top: ${pointValue}`);
         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            pointNumbers.push(Number(pointValue));
            totalScore += pointNumbers[i]
            console.log(pointValue);
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

let newPointStructure = {}; // curly brackets not included in code given, may need to change later
// Redo the hardcoding so that can test out the stuff that comes before it (like transform maybe??  or, actually I think that the code around transform is working so that can add transform function in later on at the end)


// console.log("Scrabble scoring values for");
// console.log("letter a: ", newPointStructure.A);
// console.log("letter j: ", newPointStructure.J);
// console.log("letter z: ", newPointStructure["Z"]);


let simpleScorer = function (word) {

   word = word.toUpperCase();
   let letterPoints = "";
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {
      totalScore += 1;
   }
   letterPoints = `Total Score for ${word} = ${totalScore}`;
   console.log(letterPoints);
   return letterPoints;
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
   return letterPoints;
};

let scrabbleScorer;

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
      scorerFunction: oldScrabbleScorer
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
      return oldScrabbleScorer(word);
   }
}

// tasks that have to be done:
// assign new key/value pairs (review Objects and Math section) 
// assign these key/value pairs into newPointStructure by setting nps = transform function
//  will loop thru each key in old pt structure and inside that loop, loop thru each index in that key
console.log(`new: ${oldPointStructure[1][3]}`);
function transform(oldPointStructure) {
   // ***What we're supposed to do in this function: take info from oldPointStructure object (at the top) and put into a new object (newPointValues). Instead of being "score: letter, letter, letter" for each line, each line should be "one letter: score for that letter". AND, the letter needs to be lowercase.  
   // // So, output should look like this:
   // 'a': 1,
   // 'b': 3, 
   // 'c': 3,
   // etc. for rest of alphabet

   let newPointValues = {};

   console.log(oldPointStructure[1][3])
   //for (let i = 0; i < oldPointStructure[i]; i++) {
   //newpointvalues=i
   for (const pointValue in oldPointStructure) {
      // console.log(pointValue);
      // console.log(oldPointStructure[pointValue][2]);
      // console.log(oldPointStructure[i]);
      console.log(typeof oldPointStructure);
      console.log(`top: ${pointValue}`)
      console.log(`top: ${oldPointStructure[pointValue][1]}`)
      for (let i = 0; i < oldPointStructure[pointValue].length; i++) {
         // didn't work: let tempKey = oldPointStructure[pointValue][i];
         //    // didn't work: oldPointStructure[j].toLowerCase; 
         //oldPointStructure[pointValue][j]
         console.log(`bottom one: ${pointValue}`)
         console.log(`${newPointValues[oldPointStructure[pointValue][i]]}`.toLowerCase);
         // ***line below is the body of the loop, didn't have console.log or template literals to start with. Was trying to turn object into string, to avoid the [object, Object] output in the terminal. Didn't seem to work: 
         console.log(`newPointValues ${[oldPointStructure[pointValue][i]]} = ${pointValue}`);
         // newPointValues[tempKey] = pointValue;
         console.log(`bottomobject: ${newPointValues}`)
         console.log(`bottom: ${oldPointStructure[pointValue][i]}`)
         console.log(typeof `bottom: ${oldPointStructure[pointValue][i]}`)
      }
   }
   console.log(`outside of loops: ${newPointValues}`)
}
// **tried running code outside of function, and it worked:
// let newPoints = {};
// newPoints[oldPointStructure[2][1]] = 2;
// newPoints[oldPointStructure[2][0]] = 2;
// console.log(newPoints);




// Old tries below:
// newPointValues[oldPointStructure]

// for (const pointValue in oldPointStructure) {
//    console.log(`top: ${pointValue}`);
// let upperCase = ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
// for (const number in oldPointStructure) {

//    for (let i = 0; i < oldPointStructure[number].length; i++) {

//       lowerCase.push(oldPointStructure[number][i]);

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
// }

// for (let i = 0; i < lowerCase.length; i++) {
//    lowerCase;

// }
// console.log(lowerCase);
// console.log(oldPointStructure);
// }
// console.log(newPointValues);
// return newPointValues;
//}

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