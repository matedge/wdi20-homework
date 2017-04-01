$(document).ready(function(){

  var cat = document.querySelector("img");




    var catLeft = function() {
      $("img").delay(500).animate({left: "-1500px"}, 20000, catRight);
    }
    // var catDown = function() {
    //   $("img").delay(500).animate({top: "-=500"}, 10000, catUp);
    // }
    // var catUp = function() {
    //   $("img").delay(500).animate({top: "+=500"}, 10000, catDown);
    // }
    var catRight = function() {
      $("img").delay(1000).animate({left: "1500px"}, 20000, catLeft );
  }

catRight();


});
