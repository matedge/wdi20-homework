
$(document).ready(function () {

  var $body = $('body');

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    console.log(scroll,  -scroll);
    $body.css('background-position-y', -scroll/3); // / 3);
    // $('.bill').css('background-position-y', -scroll / 6);
  });

  $(window).on('mousemove', function (e) {

    if( Math.random() > 0.2 ){
      return;
    }

    console.log('mouse move!', e.pageX, e.pageY);

    var size = parseInt( Math.random() * 10 );

    var $bubble = $('<div class="bubble">').css({
      left: e.pageX,
      top:  e.pageY,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo( $body );

    var left = Math.random() * window.innerWidth;
    var speed = 1000 + Math.random() * 10000;

    $bubble.animate({top: -200, left: left, opacity: 0}, speed, function () {
      $bubble.remove();
    });

  });

});
