window.onload = function(){

  var cat = document.getElementsByTagName("img")[0];


  var position = 0 ; //where the cat starts walking on the left side
  var positionBack = 0 ;

  var leftID;

  var walkRight = function () {
    // cat.style.transform ="scaleX(+1)";
    cat.style.left = position +'px';
    position +=10;

    if (position > window.innerWidth-100) {
        // alert('go back');
        window.clearInterval( walkingRight );
        cat.style.transform ="scaleX(-1)";
        leftID = window.setInterval(walkLeft, 10);
    }
  };

var walkingRight = window.setInterval(walkRight, 10);

//both sides ////

var walkLeft = function () {
  position -= 10;
  cat.style.left = position +'px';
  if (position === 100) {
      // alert('go back');
      window.clearInterval( leftID );
      cat.style.transform ="scaleX(+1)";
      walkingRight = window.setInterval(walkRight, 10);
  }
};

//

  // cat.style.transform ="scaleX(-1)";
  // var walkingLeft = window.setInterval(walkLeft, 10);






};
