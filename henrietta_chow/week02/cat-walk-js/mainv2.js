// window.onload = function(){

  // var cat = document.getElementsByTagName ("img")[0];
  //   var newPosition = 0;
  //
  //   cat.style.marginLeft = '0px';
  //
  // var moveCat = function () {
  //   var oldPosition = parseInt(cat.style.marginLeft);
  //   var newPosition = oldPosition + movementAmount;
  //   cat.style.marginLeft = newPosition + 'px';
  // }
  //
  // if (newPosition < window.innerWidth) {
  //   movementAmount = 10;
  // } else {
  //   movementAmount = -10;
  // }
  //   window.setInterval(moveCat, 100);
  //
  // }
//
// }
  //rotate
  //cat.style.transform="rotate(270deg)"

//   a useful function might be one like `moveCat(pixels)` which does just that...
// and if you pass a _negative_ value as the `pixels` argument, it would move the cat to the left instead of the right
//
// [9:41]
// then you'd need some kind of global variable called `movementAmount` which starts off being `10`, but when the cat gets to the right edge of the screen (remember the screen width is stored in `window.innerWidth`), `movementAmount` switches to  `-10`
window.onload = function(){

  var cat = document.getElementsByTagName("img")[0];
  cat.style.margin = "0px";

  var movementAmount= 10;
  var pixels = pixels + movementAmount;


  var moveCat = function (pixels) {

    // var pixels = pixels + movementAmount;
    // var pixels = newPixel;
    cat.style.margin= "0 " + pixels + "px";

  };

  if (pixels < window.innerWidth) {
    movementAmount = 10;
    var pixels = pixels + movementAmount;

  } else {
    movementAmount = -10;
  }
    window.setInterval(moveCat,100);

}


//function that updates the index each time
