
//cat.style.left - to find out cat position, paddingleft function paddingLeft();
// `moveCat(pixels)`
//global variable called `movementAmount`start of being 10
//then you'd need some kind of global variable called `movementAmount` which starts off being `10`, but when the cat gets to the right edge of the screen (remember the screen width is stored in `window.innerWidth`), `movementAmount` switches to  `-10`


window.onload = function(){
  var cat = document.querySelector('img');

  var leftPosition = 0;
  var movementAmount = 10;


  var paddingLeft = function(){s
    cat.style.left += 10;
  }
  var catWalk = function(){
     if(paddingLeft == 0){
     paddingLeft += window.innerWidth;
     return paddingLeft;
     }else{
     return;
     }

   var interval = window.setInterval(function(){
      if(startingPosition == 1440){
      window.clearInterval(interval);
      }else{
      paddingLeft++;
      }
    },50)
  }

}

var cat = document.querySelector('img');

var startingPosition = 0;

var window.innerWidth = 1440;

var paddingLeft = function(){
  cat.style.paddingLeft += 10;
}
var catWalk = function(){
   if(paddingLeft == 0){
   paddingLeft += window.innerWidth;
   return paddingLeft;
   }else{
   return;
   }

 var interval = window.setInterval(function(){
    if(startingPosition == 1440){
    window.clearInterval(interval);
    }else{
    paddingLeft++;
    }
  },50)
}
