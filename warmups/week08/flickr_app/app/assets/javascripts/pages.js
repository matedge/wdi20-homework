
var app = {
  pics: []
};

var flickrAPIURL = "https://api.flickr.com/services/rest/"
var flickrAPIKEY = "3ab66c44737420e50ceaee170f6eb074"

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var generateImageLarge = function(data){
  return "https://farm" + data.farm + ".staticflickr.com/" + data.server + "/" + data.id + "_" + data.secret + "_h.jpg";
}

var randy = function ( max ) {
  return Math.floor( Math.random() * max );
}

var slideshow = function () {


  // get a random index into the array of photos
  var randIndex = randy( app.pics.length );

  console.log( app.pics[ randIndex ] );

  // Grab the search text supplied by the 'search' querystring key, or if that is not
  // defined (i.e falsey), fall back on a default value
  var imageURL = generateImageLarge( app.pics[ randIndex ] ) || 'dogs';

  console.log( imageURL );

  // Create a new DIV element, set the background-image URL, and append it to the page, fading in
  $('<div/>', {
    class: 'fullscreen',
    style: 'background-image: url(' + imageURL + ')'
  })
  .appendTo('body')
  .fadeIn(5000).fadeOut(5000, function () {
    $(this).remove();
  });


    // BONUS: place a smaller version of the image randomly on the screen
    // Note that we use the .load() event handler from jQuery so we can get the actual width and height
    // of the image (this.height, etc); this lets us constrain our random placement so that the image always
    // fits on the screen

    // var $i = $('<img>', {src: generateURL(app.pics[rand], 'z') }).css({
    //   position: 'absolute',
    //   display: 'none',
    //   borderRadius: '10px',
    // })
    // .load(function(){
    //   $(this).css({
    //     top: randy( window.innerHeight - this.height) + 'px',
    //     left: randy( window.innerWidth - this.width) + 'px'
    //   }).appendTo('body').fadeIn(4000); //fadeOut(20000);
    // });

    // You should probably add the following code as the second argument to
    // fadeIn() to start removing the old DIVS, which otherwise will just sit around
    // in memory for no reason

    // , function(){
    //   // when fade-in complete
    //   if( $('div').length > 2) {
    //     $('div').first().remove();
    //   }
    // });


};


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
    },
    success: function (data) {
      app.pics = data.photos.photo;

      // Start the slideshow as soon as we have our API results, and keep running
      // the slideshow function every 5 seconds
      slideshow();
      setInterval(slideshow, 5000);
    }
  });
}

$(document).ready(function () {
  var searchTerm = getParameterByName('search');
  searchFlickr( searchTerm );
});
