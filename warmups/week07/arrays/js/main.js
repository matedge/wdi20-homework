
var testOne = ["one", "two", "three"];
var testTwo = ["one", "two", ['a', 'b', 'c'], "threeorwhatever"];

var reverse = function ( arr ) {

  var reversed = [];

  // One way to reverse the array is to start from the end, and, counting down, push each
  // element on to the end of
  //
  // for (var i = arr.length-1; i >= 0; i-- ) {
  //   console.log(i, arr[i] );
  //   reversed.push( arr[ i ] );
  //   console.log(reversed);
  // }

  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i] );
    reversed.unshift( arr[i] );
    console.log(reversed);
  }

  return reversed;
};



var flatten = function ( arr ) {

  var flattened = [];

  for (var i = 0; i < arr.length; i++) {

    var currentElem = arr[i];

    // We need to test whether current a scalar (i.e. simple var like an int or string) or an array...
    // Since every variable in Javascript is created using a constructor function (usually implicitly)
    // and this constructor is actually stored as a method of the variable, we can check whether the
    // constructor function used to construct this variable is the Array() constructor

    // Note that another way of check this is to use the 'instanceof' operator,
    // though it's slightly slower:  if( variable instanceof Array ){

    if( currentElem.constructor === Array ){
      // If the current element is an array, then loop through it and push each item on to the end
      // of our new array
      for (var j = 0; j < currentElem.length; j++) {
        flattened.push( currentElem[j] );
      }

    } else {
      // If the current element is NOT an array, just push it directly onto the end of our new array
      flattened.push( currentElem );
    }

  } // outer for

  return flattened;
};


console.log("original array: ", testOne);
console.log("reversed array: ", reverse( testOne ) );



console.log("original array: ", testTwo);
console.log("flattened array: ", flatten( testTwo ) );
