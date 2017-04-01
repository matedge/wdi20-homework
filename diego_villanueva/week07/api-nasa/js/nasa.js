
var map;
var marker;
var issApiURL = "http://api.open-notify.org/iss-now.json";
var issLat;
var issLon;

function initMap() {
  $.ajax({
    url: issApiURL,
    method: "GET",
    dataType: "JSON",
    success: displayIssData
  });
};

var displayIssData = function (data){
  issLat = parseFloat(data.iss_position.latitude);
  issLon = parseFloat(data.iss_position.longitude);
  console.log(issLat);
  console.log(issLon);

  var issLocation = {lat: issLat, lng: issLon};

  // var issLocation = {lat: -14.1461, lng: 172.7167};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: issLocation
  });
  marker = new google.maps.Marker({
    position: issLocation,
    map: map
  });
};

$(document).ready(function(){
  var issTimer = window.setInterval(function(){
    $.ajax({
      url: issApiURL,
      method: "GET",
      dataType: "JSON",
      success: function(data){
        issLat = parseFloat(data.iss_position.latitude);
        issLon = parseFloat(data.iss_position.longitude);
        map.setCenter({lat: issLat, lng : issLon, alt: 0})
        marker.setPosition({lat: issLat, lng : issLon, alt: 0});
      }
    });
  }, 2000);
  });




// $(document).ready(function(){
//   initMap ();
// });
