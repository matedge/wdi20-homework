var apiURL = "https://opentdb.com/api.php?amount=1"

var getQuestion = function(){
  console.log("What is the question?");

  $.ajax({
    url: apiURL,
    method: "GET",
    dataType: "JSON",
    success: displayQuestion
  });
}

var displayQuestion = function(data){
  var question = data.results[0].question;
  var answer = data.results[0].correct_answer;

  var $p = $('<p class="question">')
           .html(question)
           .on("click", function (){
              $(this).next().show();
           });

  var $p_hidden = $('<p class="answer">').html(answer);
  $(".container .content").append($p).append($p_hidden);
};

$(document).ready(function () {
  $(".container button").on("click", function(){
    getQuestion();
  });
});
