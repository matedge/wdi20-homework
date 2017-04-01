$(document).ready(function(){
  $("#searchbutton").on("click", function(){
    var titleInput = $("#title-searchfield").val();
    var yearInput = $("#year-searchfield").val();
    var url = "http://www.omdbapi.com/?s=" + titleInput;

    if (titleInput && yearInput) {
      url = "http://www.omdbapi.com/?s=" + titleInput + "&y=" + yearInput
    };

    $.ajax({
      url: url,
      method: "GET",
      success: function(data){
        data.Search.forEach(function(movie){
          $("body").append($("<h2>").html(movie.Title));
          var img = $("<img>").attr("src", movie.Poster).attr("movie-id", movie.imdbID);
          $("body").append(img)
        })
      },
      error: function(xhr, status, error){
        console.log("Error: " + error);
      }

    });
  });

  $(document).on("click", "img", function(){
    var id = $(this).attr("movie-id");
    var $movie = $("#movie-"+id);
      if ($movie.length){
        $movie.toggle();
        return;
      }

    $.ajax({
      url: "http://www.omdbapi.com?i=" + id,
      method: "GET",
      success: function(data){
        var genre = data.Genre;
        var actors = data.Actors;
        var plot = data.Plot;
        var more = $("<a>").text('More').attr("href", "#").attr("id", "more-"+data.imdbID).attr("movie-id", data.imdbID);

        var $info = $("<div>").html("Genre: " + genre).attr("id", "movie-"+data.imdbID).append($("<p>").html("Actors: " + actors));
        $info.append($("<p>").html("Synopsis: " + plot).attr("id", "plot-"+data.imdbID));
        $info.append(more);
        $info.insertAfter("[movie-id=" + data.imdbID + "]")
      },
      error: function(xhr, status, error){
        console.log("Error: " + error);
      }

    })

  });

  $(document).on("click", "a", function(e){
    var id = $(this).attr("movie-id");

    if ($("#full-plot-"+id).length){
      $("#plot-"+id).show();
      $("#more-"+id).show();
      $("#full-plot-"+id).hide();
      $("#less-"+id).hide();
    };

    $.ajax({
      url: "http://www.omdbapi.com?i=" + id + "&plot=full",
      method: "GET",
      success: function(data){
        $("#plot-"+id).hide();
        $("#more-"+id).hide();
        var less = $("<a>").text('Less').attr("href", "#").attr("id", "less-"+id).attr("movie-id", data.imdbID);

        var $fullPlot = $("<p>").html("Full Plot: " + data.Plot).attr("id", "full-plot-"+id);
        $fullPlot.append(less);
        $fullPlot.insertAfter("[id=plot-" + id + "]");

      },
      error: function(xhr, status, error){
        console.log("Error: " + error);
      }
    })
    e.preventDefault();

  })

});

//     var xhr = new XMLHttpRequest();
//
//     if ($("#less-"+id).length){
//       $("#plot-"+id).show();
//       $("#more-"+id).show();
//       $("#full-plot-"+id).hide();
//       $("#less-"+id).hide();
//
//     } else {
//         xhr.onreadystatechange = function(){
//           if (xhr.readyState == 4){
//             var json_response = JSON.parse(xhr.responseText);
//             $("#plot-"+id).hide();
//             $("#more-"+id).hide();
//             var fullPlot = $("<p>").html("Full Plot: " + json_response.Plot).attr("id", "full-plot-"+id);
//             var less = $("<a>").text('Less').attr("href", "#").attr("id", "less-"+id).attr("movie-id", id);
//             fullPlot.insertAfter("[id=more-" + id + "]");
//             less.insertAfter("[id=full-plot-" + id + "]");
//           }
//         }
//         xhr.open("GET", "http://www.omdbapi.com?i=" + id + "&plot=full");
//         xhr.send();
//       };
//       e.preventDefault();
//     });
//
// });

// 1) Build a page with a search input, that performs an AJAX search with the search text on OMDB, and appends the resulting posters to the page
// 2) Make each image clickable, and perform a new AJAX request when any image is clicked, to get the details for that movie, and append some of those details below the poster
// 3) Go wild and add any other features you can think of: search filtering, actor search, etc
//
// To be clear, this is all pure frontend: by using AJAX we can do all our API requests from the front-end
