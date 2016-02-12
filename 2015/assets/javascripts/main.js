$(document).ready(function() {
  var delayedElements = $('.container [data-fadein-timeout]'),
      totalTimeout    = 0;

  $(delayedElements).each(function(index) {
    var timeout  = $(delayedElements[index]).data('fadein-timeout') * 1000;
    totalTimeout = totalTimeout += timeout;

    $(this).delay(totalTimeout).fadeIn('slow').children().hide();
  });

  $('.container > *').delay(totalTimeout + 1000).fadeIn();
});

