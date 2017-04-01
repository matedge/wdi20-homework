$(document).ready(function(){
  $("#search").on("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){
        // we must have finished downloading the response :)
        var json_response = JSON.parse(xhr.responseText);
        json_response.Search.forEach(function(el){
          $("body").append($("<h2>").html(el.Title));
          var img = $("<img>").attr("src", el.Poster).attr("movie-id", el.imdbID);
          $("body").append(img);
        });
      }
    };
    var movie_name = $('#searchText').val()
    xhr.open("GET", "http://www.omdbapi.com/?s=" + movie_name);
    xhr.send();
  })

  console.log("Setup img event handling");

  $(document).on("click", "img", function () {
     $("p").remove()
     var id = $(this).attr("movie-id");
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
         var json_response = JSON.parse(xhr.responseText);
         ($("<p>")).html(json_response.Plot).insertAfter("[movie-id=" + json_response.imdbID + "]");
         ($("<p>")).html(json_response.Actors).insertAfter("[movie-id=" + json_response.imdbID + "]");
         ($("<p>")).html(json_response.Genre).insertAfter("[movie-id=" + json_response.imdbID + "]");
         ($("<p>")).html(json_response.Year).insertAfter("[movie-id=" + json_response.imdbID + "]");
       }
     };
     xhr.open("GET", "http://www.omdbapi.com/?i=" + id);
     xhr.send();
   })


});
