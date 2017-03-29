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

$(document).ready(function(){

  var $cat = $('#cat');
  $cat.css('width', '200px');
  $cat.css('top', '200px');
  $cat.css('left', '-400px');
  var catMove = 0;
  var catTurn = 0;

  var catWalk = function () {
    $cat.css({
      left: parseInt($cat.css('left')) + catMove + 'px'
    })
    if (parseInt($cat.css('left')) <= -400) {
      $cat.css('transform', 'scaleX(1)');
      catMove += 5;
    } else if (parseInt($cat.css('left')) > window.innerWidth + 400) {
      $cat.css('transform', 'scaleX(-1)');
      catMove -= 5;
      catTurn ++;
    }
  }

  var $man = $('#man');
  $man.css('top', '50px');
  $man.css('width', '200px');
  $man.css('right', '-400px');
  var manMove = 0;

  var manWalk = function () {
    if (catTurn >= 2) {
      $man.css('right', parseInt($man.css('right')) + manMove + 'px')
      if (parseInt($man.css('right')) <= -400) {
        $man.css('transform', 'scaleX(1)');
        manMove += 5;
      } else if (parseInt($man.css('right')) > window.innerWidth + 400) {
        $man.css('transform', 'scaleX(-1)');
        manMove -= 5;
      }
    }
  }

  catWalk = window.setInterval(catWalk, 20);
  manWalk = window.setInterval(manWalk, 20);



//   var men = [];
//   var maxMen = 100;
//   var danceTime = 300;
//   var stepSize = 20;
//
//
//
//   var randomRgba = function () {
//     var red = Math.round(Math.random() * 255);
//     var green = Math.round(Math.random() * 255);
//     var blue = Math.round(Math.random() * 255);
//     return "rgba("+ red + ", " + green + ", " + blue + ", 1)";
//   }
//
//   var backgroundFlash = function () {
//     var background = $('body');
//     background.animate({
//       backgroundColor: randomRgba()
//       }, 500);
//   }
//
//   var makeMen = function () {
//     if (men.length < maxMen) {
//       var man = $('.man');
//       man.css({
//         left: Math.round(Math.random() * window.innerWidth),
//         top: Math.round(Math.random() * window.innerHeight)
//       });
//       men.push(man);
//       $('body').append(man);
//       return man;
//     } else {
//       clearInterval(menMaker);
//     }
//   }
//
//
//   var moveMan = function (man) {
//     var x = parseInt(man.css('left'));
//     var y = parseInt(man.css('top'));
//     man.animate({
//       left: x + (2 * stepSize * Math.random() - stepSize) + 'px',
//       top: y + (2 * stepSize * Math.random() - stepSize) + 'px'
//     })
//
//   }
//
//   var moveMen = function () {
//     for (var i = 0; i < men.length; i++) {
//       moveMan(men[i]);
//     }
//   }
//
//   var menMaker = setInterval(makeMen, danceTime);
//   setInterval(moveMen, danceTime);
//
//
//
});
