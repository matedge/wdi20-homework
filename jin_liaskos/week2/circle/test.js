// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
// catwalk JQuery version $(document).ready(function()

  window.onload = function(){
  var img = document.getElementsByTagName('img')[0];

  img.style.left = '0px';

  var stepSize = 0;
  var catPosition = 0;
  var moveNext = 50;
  var catTimer = null;

  function catWalk() {
    // move the cat position
    img.style.left = parseInt(img.style.left) + stepSize + 'px';
    stepSize += 10;

    if (catPosition > (window.innerWidth-img.width)) {
      img.style.left = '0px'
//   } else {
//   img.style.left = currentLeft - 1 + 'px';
// }

  }

  window.setInterval(catWalk, 100);
} //walk work

// ======test ==

//   if (catPosition > (window.innerWidth-img.width)) {
//     img.style.left = '0px'
// }
// function catWalk() {
// catTimer = window.setInterval(catWalk, delayMs);
// }
