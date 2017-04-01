$(document).ready(function(){
// works //
  var $cat = $("img#blackCat");
  var cat = document.getElementsByTagName("img")[0];

  var $white = $('img#whitecat');
  var $astro = $('img#astro');


  var position = 0 ; //where the cat starts walking on the left side
  var positionWhite = 0 ;

  var leftID;

  $cat.css('top', '58%')
  $white.css('left', '55%');
  $astro.css('left', '15%');
  $white.css('top', '5%');


  var walkRight = function () {
    // cat.style.transform ="scaleX(+1)";
    $cat.css('left', position +'px');
    $white.css('top', positionWhite + 'px')
    $astro.css({transform: 'rotateZ(180deg)'});
    position +=10;
    positionWhite +=1.8;

    if (position > window.innerWidth-100) {
        // alert('go back');
        window.clearInterval( walkingRight );
        // $cat.css({transform: 'rotateZ(180deg)'});      doesnt work !!!
        cat.style.transform ="scaleX(-1)";             // this is plan B to rotate the cat
        leftID = window.setInterval(walkLeft, 10);
    }
  };

var walkingRight = window.setInterval(walkRight, 10);

//both sides ////

var walkLeft = function () {
  position -= 10;
  positionWhite -=1.8;
  $cat.css('left', position +'px');
  $white.css('top', positionWhite + 'px')
  $astro.css({transform: 'rotateZ(360deg)'});

  if (position === 0) {
      // alert('go back');
      window.clearInterval( leftID );
      // $cat.css({transform: 'rotateZ(360deg)'});      // it doesnt work
      cat.style.transform ="scaleX(+1)";
      walkingRight = window.setInterval(walkRight, 10);
  }
};

/// works ///



});  // closing opening function


 // $('img').css('left', '200px')
