window.onload = function(){
  var xhr = new XMLHttpRequest();
  console.log(xhr.readyState)
  xhr.open("GET", "http://www.omdbapi.com/?s=a&y=2016&type=movie");
  xhr.onreadyStatechange = function(){
    if(xhr.readyState == 4) {
      //we mush have finished downloading the response
      xhr.responseText;
        alert("something happend");
    }
  };
  xhr.send();
};
