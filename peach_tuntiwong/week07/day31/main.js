$(document).ready(function(){
  // Movie searching stuffs
  // Display movie_div
  var displayMovie = function(movie_obj) {
    var movie_div = $("<div>").addClass("movie_item").attr("id", movie_obj.imdbID);
    $("#movie_display").append(movie_div);
    movie_div.append($("<h2>").html(movie_obj.Title));
    var img = $("<img>").attr("src", movie_obj.Poster).data("movie-id", movie_obj.imdbID);
    movie_div.append(img);
  }

  // Searching for movie according to user inputs
  var searchMovie = function() {
    $("#movie_display").empty();

    var search_text = $("#search_field").val();
    var search_topic = $("#search_topic").val();

    // Loop through all movies to call for all movies details, for searching
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4) {
        var json_response = JSON.parse(xhr.responseText);
        json_response.Search.forEach(function(el) {

          // Calling another AJAX for more details for search topics
          var xhr2 = new XMLHttpRequest();

          xhr2.onreadystatechange = function(){
            if(xhr2.readyState == 4) {
              var json_response2 = JSON.parse(xhr2.responseText);

              // Search according to search_topic and user's input text (case sensitive)
              if(json_response2[search_topic].indexOf(search_text) >= 0) {
                displayMovie(json_response2);
              }

            }
          };
          xhr2.open("GET", "http://www.omdbapi.com/?i="+el.imdbID);
          xhr2.send();
        });
      }
    };
    xhr.open("GET", "http://www.omdbapi.com/?s=a&y=2016&type=movie");
    xhr.send();
  };

  // Eventlisteners for single search
  // Enter key
  $(document).keypress(function(e) {
    if(e.which == 13) {
      searchMovie();
    }
  });

  // Submit button
  $("#search_submit").on("click", function(){
    searchMovie();
  });

  // Listing all movies (RHS button)
  $("#search").on("click", function(){
    $("#movie_display").empty();

    var xhr = new XMLHttpRequest();

    // Display all movies
    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        var json_response = JSON.parse(xhr.responseText);
        json_response.Search.forEach(function(el) {
          displayMovie(el);
        });
      }
    };
    xhr.open("GET", "http://www.omdbapi.com/?s=a&y=2016&type=movie");
    xhr.send();
  });

  // Get movie plot when click on poster image
  $(document).on("click", "img", function(){
    var id = $(this).data("movie-id");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        var json_response = JSON.parse(xhr.responseText);

        // Check if the movie_div doesn't have plot displayed
        if($("#"+ json_response.imdbID).children().is("p") == false){
          var plot = $("#"+ json_response.imdbID).append($("<p>").html(json_response.Plot));
        }

      }
    };

    xhr.open("GET", "http://www.omdbapi.com/?i=" + id);
    xhr.send();
  });

  // Semantics stuffs
  $('.dropdown')
    .dropdown({
      // you can use any ui transition
      transition: 'drop'
    });

});
