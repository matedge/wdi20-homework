var characterApiURL = "http://gateway.marvel.com/v1/public/characters";
var API_KEY = "65fb5309d7006dab7a3412050167b78d";

var getMarvelCharacter = function(){
  // console.log("Fetching Wolverine info...");
  var input = $(".character input").val();
  $.ajax({
    url: characterApiURL,
    data: {
      apikey: API_KEY,
      name: input
    },
    dataType: "JSON",
    method: "GET",
    success: displayMarvelInfo

  })
};

var displayMarvelInfo = function(data){
  var info = data.data.results[0];
  var imgSrc = info.thumbnail.path + "." + info.thumbnail.extension;
  var series = info.series.items;
  console.log(series);
  var $img = $("<img>").attr("src", imgSrc);
  var $name = $("<h2>").html(info.name);


  $(".content").append($img);
  $(".content").append($name);

  series.forEach(function(el){
    var $series = $("<div class='series'>").html(el.name);
    $(".content").append($series);

  });

};

$(document).ready(function(){
  $(".character button").on("click", function(){
    getMarvelCharacter();
  })
});
