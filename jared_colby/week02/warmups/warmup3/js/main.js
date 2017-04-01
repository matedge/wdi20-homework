// # Anagram Detector
// ​
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.
// ​
// In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
// ​
// ## Suggestions
// ​
// - Start out by getting this working with discrete functions.
// - If you feel comfortable with that, try to put all your functions, collections, etc, into an object.



// var anagramFinder = {
//   word : [wordList]
// },
//
//   anagramList: [],
//
//   getAnagram: function (word,wordlist) {
//
//     word = word.split('');
//     for(anagram in this.word){
//       if (this.word[anagram] === [word] ){
//         this.anagramList.push(word);
//       }
//     }
//     return this.anagramList.length;
//   },


var anagramChecker = {
  anagrams: [],
}

customSort = function (word) {

  return word.split('').sort().toString();
},

checkForAnagrams = function (word, candidateWords) {

  word = word.toLowerCase();
  word = this.customSort(word);

  for (var i = 0; i < candidateWords.length; i++) {

    var candidate = this.customSort(candidateWords[i]);
    if (candidate === word){

        this.anagrams.push(candidateWords[i]);

    }
  }
  return this.anagrams;
};
console.log( checkForAnagrams("listen",["enlists", "google","inlets", "banana"]));
