// AJAX OMDB
//
// Make something amazing and beautiful that searches the OMDB via AJAX.
//
// More specifically:
// 1) Build a page with a search input, that performs an AJAX search with the search text on OMDB, and appends the resulting posters to the page
// 2) Make each image clickable, and perform a new AJAX request when any image is clicked, to get the details for that movie, and append some of those details below the poster
// 3) Go wild and add any other features you can think of: search filtering, actor search, etc
//
// To be clear, this is all pure frontend: by using AJAX we can do all our API requests from the front-end

$(document).ready(function () {

  $("#input").keyup(function(event){
      if(event.keyCode === 13){
          $("#search").click();
      }
  });

  $("#search").on("click", function () {
    $("h2, img, p").remove()
    var input = $("#input").val();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var json_response = JSON.parse(xhr.responseText);
        json_response.Search.forEach(function (el) {
          $("body").append($("<h2>").html(el.Title));
          var img = $("<img>").attr("src", el.Poster).attr("movie-id", el.imdbID).attr("alt", el.Title);
          $("body").append(img);
        });
      }
    }
    xhr.open("GET", "http://www.omdbapi.com/?s=" + input);
    xhr.send();
  })

  $(document).on("click", "img", function () {
    $("p").remove()
    var id = $(this).attr("movie-id");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var json_response = JSON.parse(xhr.responseText);
        // console.log(json_response);
        ($("<p>")).html(json_response.Plot).insertAfter("[movie-id=" + json_response.imdbID + "]");
      }
    };
    xhr.open("GET", "http://www.omdbapi.com/?i=" + id);
    xhr.send();
  })

});
