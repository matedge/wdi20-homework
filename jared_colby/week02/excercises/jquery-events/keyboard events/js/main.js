$(document).ready(function(){

  window.keyHandler = function(event){

    if (event.key === "a" || event.key === "p"){
    $('body').css("background","red");
    }else{
    $("body").css("background","blue")
    }


  }

$("input").on("keydown", keyHandler)

});
