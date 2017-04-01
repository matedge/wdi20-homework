$(document).ready(function(){  // create function
  var maxCircle = 500;
  var stepSize = 20;
  var stepTime =100;
  var circles = [];


  var makeCircle = function(){
    if(circles.length < 10){
    var circle = $("<div class='circle'></div>");
    circle.css({
      background: randomRgba(),
      position: 'absolute',
      left: Math.round(Math.random() * window.innerWidth),
      top: Math.round(Math.random() * window.innerHeight)
    });
    circles.push(circle);
    $("body").append(circle);
    return circle;
  } else {
    clearInterval(circleMaker);
  }
  }

  var randomRgba = function(){
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random()* 255);
    return "rgba("+ red + ", " + green + ", " + blue + ", 1)";

  }

var moveCircle = function(circle){
  // debugger
  var x = parseInt(circle.css("left"));
  var y = parseInt(circle.css("top"));
  circle.animate({
    left: x + (Math.round(2 * stepSize * Math.random()) - stepSize) + "px",
    top: y + (Math.round(2 * stepSize * Math.random()) - stepSize) + "px"
  },stepTime);

}
var moveCircles = function(){
  for (var i = 0; i < circles.length; i++) {
    moveCircle(circles[i])
  }
}

var circleMaker = setInterval(makeCircle, 500);
setInterval(moveCircles, stepTime);


 // setInterval(makeCircle, 500);
});
