var apiURL = "http://gateway.marvel.com/v1/public/characters";
var API_KEY = "65fb5309d7006dab7a3412050167b78d";

var random = function(max){
  return Math.floor(Math.random()* max)
};

var getMarvelCharacter = function(){
  console.log("Fetching Wolverine info...");
  var input = $(".character input").val();
  $.ajax({
    url: apiURL,
    data: {
      apikey: API_KEY,
      name: input
    },
    dataType: "JSON",
    method: "GET",
    success: getMarvelInfo

  })
};

var getMarvelInfo = function(data){
  var info = data.data.results[0];
  var imgSrc = info.thumbnail.path + "." + info.thumbnail.extension;
  console.log(imgSrc);
  var $img = $("<img>").attr("src", imgSrc);
  $("body").append($img);
};

$(document).ready(function(){
  getMarvelCharacter();

});
