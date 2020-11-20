(function($) {
  "use strict";

  /* ------ Responsive menu ------ */
  $('.mobile-toggle').on('click', function() {
    $('.main-menu').toggleClass('open-menu');
  });

  
  /* ------ Carousel script ------ */
  $('#Carousel, #Carousel2').carousel({
          interval: 8000
      })

	  
  /* ------ Counter script ------ */
  $('.timer').counterUp({
          delay: 20,
          time: 2500
  });

  
  /* ------ Hover Effect script ------ */
  $(".effect").on({
	mouseenter: function (event) {
		$(this).addClass('hover');
  },
	mouseleave: function (event) {
		$(this).removeClass('hover');
  }
});

  
   /* ------ Smooth Scrolling ------ */
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  
  /* ------ Contact form ------ */
  $('#contactform').submit(function(){
  var action = $(this).attr('action');
  $("#message").slideUp(250,function() {
          $('#message').hide();
          $('#submit')
              .attr('disabled','disabled');
          $.post(action, {
              name: $('#name').val(),
              email: $('#email').val(),
              subject: $('#subject').val(),
              comments: $('#comments').val(),
          },
              function(data){
                  document.getElementById('message').innerHTML = data;
                  $('#message').slideDown(250);
                  $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                  $('#submit').removeAttr('disabled');
                  if (data.match("success") != null){
           $('#contactform')[0].reset();
        }
              }
          );
  });
    return false;
  });

})(jQuery);


$(document).ready(function(){

  /* ------ Parallax background ------ */
  $window = $(window);
  if( $window.width() > 800){

    $('section[data-type="background"]').each(function(){
    var $bgobj = $(this);

    $(window).scroll(function() {
      var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ backgroundPosition: coords });
    });

  });    
  }

});