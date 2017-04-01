// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10


var scrabble = {
  letterScores: {
    1:["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
    2:["D","G"],
    3:"BCMP".split(''),
    4:"FHVWY".split(''),
    5:"K".split(''),
    8:"JQ".split(''),
    10: "QZ".split('')
  },
  // letterScoresAlternative: {
  //     'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
  //     'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
  //     's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
  //     'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
  //     'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
  //     'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
  //     'q' : 10, 'z' : 10
  //   },
  score: function (word) {
    var sum = 0;
    word = word.toUpperCase();

    for(var i=0; i< word.length; i++){
      var letter = word[i];

      for(key in this.letterScores){

        if (this.letterScores[key].includes(letter)){

          sum += parseInt(key);
          console.log(letter + ' gets a ' + key);
        }

      } //for in
    }
    return sum;
  }

};


console.log('scrabble.score ("cabbage"), expecting: 14');
console.log(scrabble.score("cabbage"));















// var word = function(){
//   var wordArray = (Array.from (word))
//
//
//
//   }
// console.log(word("CABBAGE"));
