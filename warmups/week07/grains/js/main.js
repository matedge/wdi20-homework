
var grains = {

  // generate an array of [1..64] using the Underscore method
  range: _.range(1, 65),

  square: function( num ){
    // Use the JS builtin library function to work out our number of grains for this square by raising
    // 2 to the power of the square number - 1. We need to subtract 1 because 2^1 = 2, so if we want
    // square number 1 to have 1 grain in it, we need to subtract 1 from the square number to get the
    // correct answer.
    return Math.pow(2, num-1);
  },

  eachSquare: function() {

    var results = [];

    // Iterate over our range array and create a result array to store the answer for each square,
    // by calling our square() function on each square
    _.each(grains.range, function (i) {
      var grain = grains.square(i);
      results.push("Square " + i + ": " + grain + ' <span style="font-size: 8pt">[ 2^(square-1) = 2^' + (i-1) + " = " + grain + " ]</span><br>");
    });

    return results;
  },

  total: function(){
    return _.reduce(grains.range, function(sum, num){
      return sum + grains.square(num);
    }, 0);
  },
};

// Set up click handlers for our GUI to trigger the appropriate calculation
$(document).ready(function () {

  $("#one").click(function () {

    var val = $("#number").val();
    var result = grains.square(val);
    $("#result").text(result);

  });

  $("#eachSquare").click(function () {
    var result = grains.eachSquare();
    $("#result").html(result);
  });

  $("#total").click(function () {
    var result = grains.total();
    $("#result").text(result);
  });


});


// Test the basic function
console.log('Square 1: (expecting 1), answer:', grains.square( 1 ) );
console.log('Square 3: (expecting 4), answer:', grains.square( 3 ) );

// Output the grains for each square via our fullboard() method
_.each(grains.eachSquare(), function (el) {
  console.log( el );
});
