$(document).ready(function(){

  window.hideImg = function(){
    // debugger;
    $(this).siblings().find('img').hide();
  };

  window.showImage = function(){

    $(this).siblings().find("img").show()
  }

$(".hideButton").on ("click", hideImg);
$(".showButton").on ("click", showImage);

});
