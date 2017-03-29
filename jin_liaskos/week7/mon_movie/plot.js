$(document).ready(function(){

  $("#search").on ("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){  //eventhandler

      if(xhr.readyState == 4){
      //   //we mush have finished downloading the response
      //
          var json_response = JSON.parse(xhr.responseText);
          json_response.Search.forEach(function(el){
            $("body").append($("<h2>").html(el.Title));
            var img = $("<img>").attr("src", el.Poster).attr("movie-id", el.imdbID);
            $("body").append(img)

          });
        }
    };

    var search = $("#search_text").val();
    xhr.open("GET", "http://www.omdbapi.com/?s=" + search );
    // xhr.open("GET", "http://www.omdbapi.com/?s=alien");
    xhr.send();
    //console.log(json_response);
  });


  $(document).on("click", "img", function(){  //first we create a event handler when click on image

    var id = $(this).attr("movie-id");  //create variable id to grab attribute of that move

    console.log("clicked ID: " + id);

    var xhr = new XMLHttpRequest();   //set up the request, but this requests don't run until we initiate the GET method

    xhr.onreadystatechange = function(){  //eventhandler
      if(xhr.readyState == 4){
      //   //we mush have finished downloading the response
      //
        var json_response = JSON.parse(xhr.responseText);
        console.log(json_response);

        var $plot_text = $("<p>").html(json_response.Plot);  //create plot_text as a jquery object to store the json plot text and insert on the html page
        //$("body").append.html(plot_text)

        $plot_text.insertAfter( $('[movie-id="' + id + '"]') ); //insert plot_text after image

      };
    };

    xhr.open("GET", "http://www.omdbapi.com/?i=" + id);
    xhr.send();

  });

});





// document.body.append(heading)
//0 unsent, 1 opened, 2, headers_received , 3 loading, 4. done
