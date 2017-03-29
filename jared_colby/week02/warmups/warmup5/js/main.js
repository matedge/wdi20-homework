$(document).ready(function(){

  var words = $('#words').text().split(/[ .;,\n\-]/);

  var $body = $('body');

  var randy = function ( max ) {
    return Math.floor ( Math.random() * max);

  }

  var putWord = function () {

    var randomIndex = randy(words.length);
    var text = words [randomIndex];

    var $div = $('<div class = "word"></div>').text( text );

    $div.css({
      top: randy( window.innerHeight ) + 'px',
      left: randy( window.innerWidth ) + 'px',
      display: 'inline',
      color: 'rgb('+ randy(255)')'
    });

    $body.append($div);




    $div.fadeIn(1000).fadeOut(2000, function(){
      $(this).remove();
    });

  };
  setInterval(putWord,500);

});
