var dateApiURL = "http://gateway.marvel.com/v1/public/comics?";
var API_KEY = "65fb5309d7006dab7a3412050167b78d";

var getMarvelComics = function(){
  // console.log("Fetching Wolverine info...");
  var beginDateStr = $("#begindate").val();
  var endDateStr = $("#enddate").val();

  $.ajax({
    url: dateApiURL,
    data: {
      dateRange: beginDateStr + "," + endDateStr,
      apikey: API_KEY,
      limit: 100
    },
    dataType: "JSON",
    method: "GET",
    success: displayCoverInfo

  })
};

var displayCoverInfo = function(data){
  var info = data.data.results;
  console.log(data.data);
    info.forEach(function(el){
      var imgSrc = el.thumbnail.path + "." + el.thumbnail.extension;
      // console.log(imgSrc);
      var $img = $("<img>").attr("src", imgSrc);
      $(".content").append($("<div class='cover'>").html($img));
    })
};

$(document).ready(function(){
  $(".date button").on("click", function(){
    getMarvelComics();
  })

});
