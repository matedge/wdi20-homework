$(document).ready(function(){

  window.changeColor = function(){
    $("body").css("background", $(this).attr("color"));
  }

$("button").on ("click", changeColor);



});
