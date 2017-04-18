

var isHappy = function ( num ) {

  var cycle = {};  // {};

  var squareSum = num;

  var count = 0;

  while(true){

    squareSum = sumOfDigitSquares( squareSum );

    if( squareSum === 1 ){
      // found a happy number
      return true;
    }

    if( cycle[ squareSum ] === true ) {
      // detected a repeating pattern, i.e. not a happy number
      return false;
    }

    cycle[ squareSum ] =  true;
    count++;
  }

};

var sumOfDigitSquares = function ( num ) {

  var numStr = num.toString();
  var sum = 0;

  for (var i = 0; i < numStr.length; i++) {
    // sum += Math.pow(+numStr[i], exp);
    sum += +numStr[i] * +numStr[i];
  }

  /// Here's the Underscore.js way, using reduce:
  // _.reduce(numStr, function (sum, num) {
  //   return sum + (+num * +num);
  // });


  // Here's an even fancier way to get the individual digits of the number without converting it
  // to a sting first, by using modulus
  // var digit;
  // while (num > 0) {
  //   digit = num % 10 ;
  //   sum += digit * digit ;
  //   number = (number  - digit) / 10 ;
  // }

  return sum;
};




var generateHappyNumbers = function( count ){

  var found = 0;

  for (var i = 0; found < count; i++) {

    if( isHappy(i) ){
      found++;
      console.log('Found happy number #%d: %d', found, i);
    }

  }

};


generateHappyNumbers( 10 );
