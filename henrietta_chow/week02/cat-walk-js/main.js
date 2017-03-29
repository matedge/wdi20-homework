window.onload = function(){

  var cat = document.getElementsByTagName ("img")[0];
    var newPosition = 0;

    cat.style.left = '0px';
    cat.style.right = '0px';
USE style.left and right

  var moveCatRight = function () {
    var oldPosition = parseInt(cat.style.left);
    var newPosition = oldPosition + 10;
    cat.style.marginLeft = newPosition + 'px';
  }

    var catWalkingRight = window.setInterval(moveCatRight, 100);

    if (newPosition === 500) {
      window.clearInterval (catWalkingRight);
      cat.style.transform = "scaleX(-1)";
    };
    var catWalkingLeft = window.setInterval(moveCatLeft, 100);

    if (newPosition === window.innerWidth - 100) {
      window.clearInterval (catWalkingRight);
      cat.style.transform = "scaleX(-1)";
      // window.setInterval(moveCatLeft, 100)
    }
  }


  // var moveCatLeft = function () {
  //   var oldPosition = parseInt(cat.style.marginRight);
  //   var newPosition = oldPosition - 10;
  //   cat.style.marginRight = newPosition + 'px';
  // }

  // var movementAmount = 100;
  //
  // var catMoves = window.setInterval(function(){
  //   if (newPosition === window.innerWidth) {
  //     window.clearInterval(catMoves);
  //   } else {
  //     moveCatRight();
  //   }
  // }, 2000)

  // var catMoves = {
    // if (newPosition < window.innerWidth) {
    //   movementAmount = 10;
    //   window.setInterval(moveCatRight, 100);
    //
    // }
    // else if (newPosition === window.innerWidth) {
    //   window.clearInterval(catMoves);
    // }


    var body = document.getElementsByTagName("body")[0];

    body.style.background = 'white';
    var backgroundColor = ['yellow', 'red', 'green', 'blue', 'purple'];

    var changeBackground = function () {

      for (var i = 0; i < backgroundColor.length; i++){
        body.style.background = backgroundColor[i];
      }
    }
      var backgroundInterval = window.setInterval(changeBackground, 1000);



  //rotate
  //cat.style.transform="rotate(270deg)"



//function that updates the index each time
