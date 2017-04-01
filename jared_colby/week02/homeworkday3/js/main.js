$(document).ready(function(){
  //........ your code here ..........

  var cat = document.querySelector("img");

  var x_pos = 0;
  setInterval(function(){
    x_pos += 10;
    cat.style.left = x_pos + "px";
  },200)



});
