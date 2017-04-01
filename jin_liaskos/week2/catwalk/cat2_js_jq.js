$(document).ready(function());


window.onload = function(){

  img.style.left = '0px';

  var stepSize = 30;
  var catPosition = 0;
  var moveNext = 50;
  var catTimer = null;


var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
function catWalk() {
  img.style.left = (parseInt(img.style.left) + 10) + 'px';
}
window.setInterval(catWalk, 50);

var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
function catWalk() {
  var catPosition = parseInt(img.style.left);
  img.style.left = (catPosition + 10) + 'px';
  if (catPosition > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
window.setInterval(catWalk, 50);
