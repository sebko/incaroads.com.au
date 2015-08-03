$(window).scroll(function() {
    var $splash = $('.splash');
    //Check to see if $splash exists?
    if ($splash) {
        if ($(window).scrollTop() >= $splash.height()) {
            $('.navbar').addClass('navbar-fixed');
            $('.navbar-mobile').addClass('navbar-fixed');
        } else {
            $('.navbar').removeClass('navbar-fixed');
            $('.navbar-mobile').removeClass('navbar-fixed');
        }
    }
});

var hamburglerToggled = 0;
document.querySelector('.navbar-mobile-hamburger').addEventListener('click', function() {
  if (hamburglerToggled++ % 2) {
    document.querySelector('.navbar-mobile-items').style.display = 'none';
  }else {
    document.querySelector('.navbar-mobile-items').style.display = 'block';
  }
});

$('.navbar-mobile-items').on('click', function(){
  document.querySelector('.navbar-mobile-items').style.display = 'none';
});

$('.splash').click(function(e) {
    $('html,body').animate({scrollTop: $('.splash').height()}, 800);
});

$('a').smoothScroll();

// Only run masonry once images have been loaded
$(window).load(function() {
    $('#masonry').masonry({
      itemSelector: '.item',
      transitionDuration: 0
    });
});

