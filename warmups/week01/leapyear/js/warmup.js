
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400

var isDivisibleBy4 = function( num ){


  return num % 4 === 0;
};


var isDivisibleBy100 = function( num ){
  return num % 100 === 0;
};

var isDivisibleBy400 = function( num ){
  return num % 400 === 0;
};

var isDivisbleBy = function( num, divider ){
  return num % divider === 0;
};




// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400

var isLeapYear = function( year ){

  var result;

  if( isDivisibleBy4( year )){

    if( isDivisibleBy100( year ) && !isDivisibleBy400( year ) ){
      result = false;
    } else {
      result = true;
    }

  } else {
    result = false;
  }//divBy4

  return result;
};

var year = prompt('Gie us a year pal');

// year = parseInt(year);


console.log( isLeapYear( year ));
