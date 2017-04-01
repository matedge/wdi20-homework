$(document).ready(function(){
  var maxCircles = 100;
  var stepTime = 500;
  var StepSize = 100;

  var circles = [];

  var makeCircle = function () {
    if (circles.length < 100){

      var circle = $("<div class = 'circle'></div>");
      circle.css ({

        background: randomRgba(),
        position: "absolute",
        left:Math.round(Math.random() * window.innerWidth),
        top:Math.round(Math.random() * window.innerHeight)

      });
      circles.push(circle);
      $('body').append(circle);
      return circle;

    }else{
      clearInterval(circleMaker);
    }

  };

  var randomRgba = function(){
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    return "rgba("+red+", "+green+", "+blue+",1 )"

  };

   var moveCircle = function(circle){
    //  debugger
     var x = parseInt(circle.css("left"));
     var y = parseInt(circle.css("top"));

     circle.animate({

       left: x +(2 * stepSize * Math.random()-100)+"px",
       top: y + (2 * stepSize * Math.random()-100)+"px",
       backgroundColor: randomRgba(),
       width: w +(10 * Math.random()) + "px",
       height: h +(10 * Math.random()) + "px"


     },500);

   };

   var moveCircles = function (){
     for (var i = 0; i < circles.length; i++){
       moveCircle(circles[i]);
     }
   };


  var circleMaker = setInterval(makeCircle,stepTime);
  setInterval(moveCircles, stepTime);

});
