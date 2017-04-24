
console.log('main.js loaded');


var tick = 0;

var tick2 = 0;


var setup = function () {

  createCanvas(windowWidth, windowHeight);
  background(0);

  noStroke();

  colorMode(HSB, 255);
};


var draw = function(){

  // background(0);  // clear screen each refresh


  // fill(200);
  // text("framerate: " + parseInt(frameRate()), 10, 20 )

  var hue = tick % 255;

  var hue = map( mouseX, 0, windowWidth, 0, 255 );

  //
  // fill(hue, 255, 255);
  //
  // var s = random(10, 100);

  var s = mouseX - pwinMouseX;
  hue = map(s, 0, 300, 0, 255)
  fill(hue, 255, 255);

  // ellipse(random(windowWidth), random(windowHeight), s, s);

  tick += map(mouseX, 0, windowWidth, 0, 0.1);        //0.05;
  tick2 += map(mouseY, 0, windowHeight, 0, 0.1);

  var diffY = sin(tick) * 400;

  var diffX = sin(tick2) * 400;

  ellipse(windowWidth/2 + diffX, windowHeight/2 + diffY, 80, 80);




  //
  // if( mouseIsPressed ){
  //
  //   var hue = tick % 255;
  //
  //   fill(hue, 255, 255);
  //
  //   ellipse(mouseX, mouseY, 80, 80);
  //
  //   tick++;
  // }

 // tick++;
};
