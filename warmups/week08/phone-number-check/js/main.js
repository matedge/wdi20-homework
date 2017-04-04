// The rules for a valid phone number in this exercise are as follows:
//
// If the phone number has any non-numerals in it, they should be removed/ignored
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
// If the phone number is 11 digits and the first number is not 1, then it is an invalid number
// If the phone number is 10 digits long, it is valid; if not, it is invalid
// EXERCISE
//
// Write a Javascript function which takes a phone number as a string and returns the cleaned-up version of the number if it is valid (ie. with non-numerals removed), or if not valid, returns '0000000000' (ten zeroes)
// Write a Javascript function which returns a formatted version of the given phone number, ie:
// Input:  11234567890
// Output: (123) 456-7890

var phoneNumber = {


  getFormattedNumber: function ( num ) {

    var cleaned =  this.cleanNumber( num );

    // the following could be done in a one-line regular expression...
    var areaCode = cleaned.substr(0, 3);
    var exchangeCode = cleaned.substr(3, 3);
    var remaining = cleaned.substr(6, 4);

    return '(' + areaCode + ') ' + exchangeCode + '-' + remaining;

  },

  isValid: function ( num ) {
    var cleaned = this.cleanNumber( num );

    if( cleaned.length !== 10 ){
      return '0000000000';
    } else {
      return cleaned;
    }

  },

  // Regex one-liner! Interesting but too magic....
  //
  // cleanNumberRegex: function ( num ) {
  //   return num.replace(/\D/g,'');
  // },

  cleanNumber: function ( num ) {

    var cleaned = [];
    var numerals = '0123456789';  // our list of valid numbers (could add other valid characters to this)

    for (var i = 0; i < num.length; i++) {
      var currentNum = num[i];

      // Check if the current number is in our list of valid numbers
      if ( numerals.indexOf( currentNum ) >= 0 ) {
        cleaned.push( currentNum );
      }
    } // for

    cleaned = cleaned.join('');

    // If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
    if( cleaned.length === 11 && cleaned[0] === '1'){
      return cleaned.substr(1); //, 10);
    } else {
      return cleaned;
    }

  } // cleanNumber


};

var num = '112345s67#89mm0123';
console.log('Input:', num);
console.log('Output:',  phoneNumber.cleanNumber( num ) )
// console.log('Output:',  phoneNumber.cleanNumberRegex( num ) )

console.log('isValid:', phoneNumber.isValid( num ) );

console.log( phoneNumber.getFormattedNumber( num ));
