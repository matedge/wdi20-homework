$(document).ready(function(){
  $("#searchbutton").on("click", function(){
    var titleInput = $("#title-searchfield").val();
    var yearInput = $("#year-searchfield").val();
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      console.log(xhr.readyState);
      if (xhr.readyState == 4){
        // confirming that downloading of response is done :)
        var json_response = JSON.parse(xhr.responseText);
        console.log(json_response.Search);
        json_response.Search.forEach(function(movie){
          $("body").append($("<h2>").html(movie.Title));
          var img = $("<img>").attr("src", movie.Poster).attr("movie-id", movie.imdbID);
          $("body").append(img)
        })
      };
    }
    if (titleInput && yearInput){
      xhr.open("GET", "http://www.omdbapi.com/?s=" + titleInput + "&y=" + yearInput);
      xhr.send();
    } else if (yearInput.length === 0){
      xhr.open("GET", "http://www.omdbapi.com/?s=" + titleInput);
      xhr.send();
    } else {
      alert("Search again");
    }

  });

  $(document).on("click", "img", function(){
    var id = $(this).attr("movie-id");
    var xhr = new XMLHttpRequest();

    var $genre = $("#genre-"+id);
    var $actors = $("#actors-"+id);
    var $plot = $("#plot-"+id);
      console.log($genre, $actors, $plot, id);
      if ($plot.length){
        $plot.toggle();
        $genre.toggle();
        $actors.toggle();
        return;
      };

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4){
        var json_response = JSON.parse(xhr.responseText);
        var genre = $("<p>").html("Genre: " + json_response.Genre).attr("id", "genre-"+id);
        var actors = $("<p>").html("Actors: " + json_response.Actors).attr("id", "actors-"+id);
        var plot = $("<p>").html("Synopsis: " + json_response.Plot).attr("id", "plot-"+id);
        var more = $("<a>").text('More').attr("href", "#").attr("id", "more-"+id).attr("movie-id", id);
        genre.insertAfter("[movie-id=" + json_response.imdbID + "]");
        actors.insertAfter("[id=genre-" + json_response.imdbID + "]");
        plot.insertAfter("[id=actors-" + json_response.imdbID + "]");
        more.insertAfter("[id=plot-" + json_response.imdbID + "]");
      }
    };
    xhr.open("GET", "http://www.omdbapi.com?i=" + id);
    xhr.send();
  });


  $(document).on("click", "a", function(e){
    var id = $(this).attr("movie-id");
    var xhr = new XMLHttpRequest();

    if ($("#less-"+id).length){
      $("#plot-"+id).show();
      $("#more-"+id).show();
      $("#full-plot-"+id).hide();
      $("#less-"+id).hide();

    } else {
        xhr.onreadystatechange = function(){
          if (xhr.readyState == 4){
            var json_response = JSON.parse(xhr.responseText);
            $("#plot-"+id).hide();
            $("#more-"+id).hide();
            var fullPlot = $("<p>").html("Full Plot: " + json_response.Plot).attr("id", "full-plot-"+id);
            var less = $("<a>").text('Less').attr("href", "#").attr("id", "less-"+id).attr("movie-id", id);
            fullPlot.insertAfter("[id=more-" + id + "]");
            less.insertAfter("[id=full-plot-" + id + "]");
          }
        }
        xhr.open("GET", "http://www.omdbapi.com?i=" + id + "&plot=full");
        xhr.send();
      };
      e.preventDefault();
    });

});

// 1) Build a page with a search input, that performs an AJAX search with the search text on OMDB, and appends the resulting posters to the page
// 2) Make each image clickable, and perform a new AJAX request when any image is clicked, to get the details for that movie, and append some of those details below the poster
// 3) Go wild and add any other features you can think of: search filtering, actor search, etc
//
// To be clear, this is all pure frontend: by using AJAX we can do all our API requests from the front-end
