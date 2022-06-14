// counterUp js
jQuery(document).ready(function( $ ) {
  $('.counter').counterUp({
    delay: 30,
    time: 10000
});
});

// slick slider
$('.services-work-content').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  cssEase: 'linear',
  rtl: true,
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 2
    }
  },{
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
