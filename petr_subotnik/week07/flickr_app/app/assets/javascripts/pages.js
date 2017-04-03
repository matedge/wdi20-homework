var flickrAPIURL = "https://api.flickr.com/services/rest/"
var flickrAPIKEY = "3ab66c44737420e50ceaee170f6eb074"

var generateImageThumbnail = function(data){
  return "https://farm" + data.farm + ".staticflickr.com/" + data.server + "/" + data.id + "_" + data.secret + "_q.jpg";
}


var parseFlickrResults = function(data){
  ajaxRequestInProgress = false;
  var photosArray = data.photos.photo;
  page = data.photos.page + 1;
  photosArray.forEach(function(el){
    var imgSrc = generateImageThumbnail(el);
    var $img = $("<img>").attr("src", imgSrc);
    $("body").append($img);
  })
}



var searchFlickr = function(searchTerm){
  ajaxRequestInProgress = true;
  $.ajax({
    url: flickrAPIURL,
    method: "GET",
    data: {
      api_key: flickrAPIKEY,
      text: searchTerm,
      method: "flickr.photos.search",
      nojsoncallback: 1,
      format: "json",
      page: page++
    },
    success: parseFlickrResults
  })//.done(function(data){
  //   $("body").html("");
  // })
}

var page = 1;
var ajaxRequestInProgress = false;

$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      // alert("you are at bottom");
      var term = $("#searchFlickr").val();
      if(!ajaxRequestInProgress){
        searchFlickr(term);
      }
    }
});

$(document).ready(function(){
  $("#submit").on("click", function(){
    var term = $("#searchFlickr").val();
    if(!ajaxRequestInProgress){
      searchFlickr(term);
    }
  });
});
