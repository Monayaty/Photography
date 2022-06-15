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
      mobileFirst: true,
      slidesToShow: 2,
    }
  },{
    breakpoint: 480,
    settings: {
      mobileFirst: true,
      slidesToShow: 1,
    }
  }]
});


$(document).ready(function() {

  //wow.js animation on scroll
new WOW().init();


//quotes looped from an array of quotes

let quotes=["Websites promote you 24/7: No employee will do that.", "Website without visitors is like a ship lost in the horizon.", "We don't just sell websites, we create websites that SELL.", "We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.","When choosing a development company for your website, it is very important not only to look at the price, but also the quality of the work you hope to obtain."];

let pquote = $('#quote');
let counter=0;

const quotechanging = function() {
  if (counter==5) {
    counter=0
  }

  pquote.text(quotes[counter])
  counter++

};

setInterval(quotechanging,6000);

//hover on images


    $('.card').mouseenter(function(){
 $(this).find('.card-overlay').css({'visibility': 'visible'});
    $(this).find('h3').addClass('animated fadeInUp');
  $(this).find('.card').css({'opacity': '0.8'});
    });

      $('.card').mouseleave(function(){
   $(this).find('.card-overlay').css({'visibility': 'hidden'});
     $(this).find('h3').removeClass('animated fadeInUp');
  $(this).find('.card').css({'opacity': '1'});
    });

  // Add smooth scrolling to all links

  $("a").on("click", function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  var navMain = $(".navbar-collapse");
  navMain.on("click", "a:not([data-toggle])", null, function() {
    navMain.collapse("hide");
  });
});

// button animation
$(function () {
  $('.btn-animate')
    .on('mouseenter', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({ top: relY, left: relX })
    })
    .on('mouseout', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({ top: relY, left: relX })
    });
  $('[href=#]').click(function () { return false });
});

//text-typing animation
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
};

  // TxtType.prototype.tick = function() {
    //     var i = this.loopNum % this.toRotate.length;
    //     var fullTxt = this.toRotate[i];

    //     if (this.isDeleting) {
    //     this.txt = fullTxt.substring(0, this.txt.length - 1);
    //     } else {
    //     this.txt = fullTxt.substring(0, this.txt.length + 1);
    //     }

    //     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    //     var that = this;
    //     var delta = 200 - Math.random() * 100;

    //     if (this.isDeleting) { delta /= 2; }
    //     if (!this.isDeleting && this.txt === fullTxt) {
    //     delta = this.period;
    //     this.isDeleting = true;
    //     } else if (this.isDeleting && this.txt === '') {
    //     this.isDeleting = false;
    //     this.loopNum++;
    //     delta = 500;
    //     }

    //     setTimeout(function() {
    //     that.tick();
    //     }, delta);
    // };

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

 // inject css
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};



$("#btnMore").click(function(){
  $(".display-img").addClass("loaded-item");
  $(".display-img").removeClass("hidden-item");
});






