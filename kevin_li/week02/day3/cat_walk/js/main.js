// Exercises: Animation
//
// The Cat Walk
//
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
//
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
//
//  </body>
// </html>
// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

window.onload = function () {

  var cat = document.getElementsByClassName('cat')[0];
  cat.style.width = '200px';
  cat.style.top = '200px';
  cat.style.left = '-400px';
  var catMove = 0;
  var catTurn = 0;

  var catWalk = function () {
    cat.style.left = parseInt(cat.style.left) + catMove + 'px';
    if (parseInt(cat.style.left) <= -400) {
      cat.style.transform = 'scaleX(1)';
      catMove += 5;
    } else if (parseInt(cat.style.left) > window.innerWidth + 400) {
      cat.style.transform = 'scaleX(-1)';
      catMove -= 5;
      catTurn ++;
    }
  }


  var man = document.getElementsByClassName('man')[0];
  man.style.top = '50px';
  man.style.width = '200px';
  man.style.right = '-400px';
  var manMove = 0;

  var manWalk = function () {
    if (catTurn >= 2) {
      man.style.right = parseInt(man.style.right) + manMove + 'px';
      if (parseInt(man.style.right) <= -400) {
        man.style.transform = 'scaleX(1)';
        manMove += 5;
      } else if (parseInt(man.style.right) > window.innerWidth + 400) {
        man.style.transform = 'scaleX(-1)';
        manMove -= 5;
      }
    }
  }

  catWalk = window.setInterval(catWalk, 20);
  manWalk = window.setInterval(manWalk, 20);
}
