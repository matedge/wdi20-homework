$(document).ready(function(){
  var $interupt = $(".interupt");
  $interupt.hide();
  var $catImg = $("#cat");
  var catPos = 0; //current desired position of image
  var timeInterval = 5; //set cat speed
  var interuptInterval = 30;
  var isForward = 1; //use to indicate direction and index for shifting image
  $catImg.css('top', ((window.innerHeight-$catImg.height())/2 + "px"));

  var newBackgroundColor = function() {
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  var catFlip = function() {
    if (isForward === 1) {

      isForward = -1;
      $catImg.css("transform", "scaleX(" + isForward + ")");
    } else {
      isForward = 1;
      $catImg.css("transform", "scaleX(" + isForward + ")");
    }
  };

  var moveCat = function() {
    catPos += isForward;
    $catImg.css("left", catPos + "px");
  }

  var isMidWay = function() {
    if (catPos === Math.floor((window.innerWidth-$catImg.width())/2)) {
      return true;
    }
  }


  var runInterupt = function() {
    // Now blank page
    // clearInterval(catInterupt);
    var interuptCounter = 0;
    var catInterupt = setInterval(function() {
      console.log(interuptCounter);
      if (interuptCounter > 1) {
        clearInterval(catInterupt);
      }
      console.log("runInterupt");
      $interupt.show();
      interuptCounter++;
    }, interuptInterval);
    // end of interupt
    backToCat();
  }

  var backToCat = function() {
    $interupt.hide();
    // Now blank page\
    console.log("backToCat");
    if (isForward === 1) {
      catPos = Math.floor((window.innerWidth-$catImg.width())/2) + 1;
    } else {
      catPos = Math.floor((window.innerWidth-$catImg.width())/2) - 1;
    }
    $catImg.show();
    catWalk();
  }

  var catWalk = function() {
    // clearInterval(catInterval);
    var catInterval = setInterval(function() {

      //check position
      if (isMidWay()) {
        clearInterval(catInterval);
        $catImg.hide();
        runInterupt();
      }


      // normal cat walking
      if (isForward === 1) {
        moveCat();
        if (catPos === (window.innerWidth-$catImg.width())) {
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
