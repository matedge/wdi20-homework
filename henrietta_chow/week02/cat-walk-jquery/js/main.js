$(document).ready(function(){

  $body = $('body');
  $body.css ("background-image", "url(images/background.jpg)");

  $cat = $('img#cat');
  $xandcat = $('img#xandcat');
  $cat.css ("top", "450px");
  $xandcat.css ("top","450px")

  var moveRight = function () {
    var x = parseInt($cat.css('left'));
    $cat.css ({
        left: x + 30 + 'px'
      });

    if (x > window.innerWidth - 100) {
      clearInterval(intervalRight);
      $cat.css ('transform', 'scaleX(-1)');

      // transform: 'scaleX(' + (-1.0 + Math.random()*2.0) + ')'

      intervalLeft = setInterval(moveLeft, 200)
    }
  }
    intervalRight = setInterval(moveRight, 200);

  var moveLeft = function () {
    var x = parseInt($cat.css('left'));
    $cat.css ({
      left: x - 50 + 'px'
    });
    if (x === 10) {
      clearInterval(intervalLeft);
      intervalRight = setInterval(moveRight, 500);
    }
  }


});
