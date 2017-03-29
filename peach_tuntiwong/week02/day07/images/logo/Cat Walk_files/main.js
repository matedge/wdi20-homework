$(document).ready(function(){

  var catImg = $("#cat");
  var catPos = 0; //current desired position of image
  var timeInterval = 5; //set speed
  var isForward = 1; //use to indicate direction and index for shifting image
  catImg.css('top', ((window.innerHeight-catImg.height())/2 + "px"));

  var newBackgroundColor = function() {
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  var catFlip = function() {
    if (isForward === 1) {

      isForward = -1;
      catImg.css("transform", "scaleX(" + isForward + ")");
    } else {
      isForward = 1;
      catImg.css("transform", "scaleX(" + isForward + ")");
    }
  };

  var moveCat = function() {
    catPos += isForward;
    catImg.css("left", catPos + "px");
  }

  var checkReachCenter = function() {
    if (catPos == Math.floor((window.innerWidth-catImg.width())/2)) {
      console.log("reach center");
    }
  }

  var catWalk = function() {
    var catIntervalForward = setInterval(function() {
      checkReachCenter();
      // newBackgroundColor();

      if (isForward === 1) {
        moveCat();
        if (catPos === (window.innerWidth-catImg.width())) {
          catFlip();
        }
      } else {
        moveCat();
        if (catPos === 0) {
          catFlip();
        }
      }

    }, timeInterval);
  };

  catWalk();











})
