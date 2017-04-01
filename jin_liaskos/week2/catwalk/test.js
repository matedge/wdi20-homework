// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
// setInterval/setTimeout -- when call this functionn it returns unique identifier
// window.setInterval(function ()), 1000} run setInterval every 1000 ms
// console.log("a")
// console.log("b")
// console.log("c")
// return a
// b
// c
// setTimeout(function(){console.log("a")},1)
// cosole.log("b")
// console.log("c")
// --- when run this result print b, b then wait 1ms print a
//window.setIntrval(function(){console.log("a")},1000) when run this it will return say
//>902 then keep printing a
// window.clearInterval(902-unique idntifier)
// funtion will stop
//in case of cat can b sth like
// var consoleLogTimer = setInterval(function(){console.log("ds")}, 1000)
// clearInterval(consoleLogTimer) ->> to stop interval
// var i = 0 make new box, var
// var interval = window.setInterval(function()){
//     if(i==3){
//       window.clearInterval(interval);
//     } else {
//       alert("it has been 1 second");
//       i++
//     }
// }, 1000)
// when run var interval - already been run, all executed and its done when i = 3, that's why we can use var interval again in clearInterval(interval);

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


  }

  window.setInterval(catWalk, 100);
}
//   if (catPosition > (window.innerWidth-img.width)) {
//     img.style.left = '0px'
// }
// function catWalk() {
// catTimer = window.setInterval(catWalk, delayMs);
// }
