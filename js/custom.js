
(function ($) {

  AOS.init({
    easing: 'ease-out-sine',
    anchorPlacement: 'top-bottom',
    disable: window.innerWidth < 1200,
    once: true,
    duration: 1000
  });
 

  $(function () {
      $('[data-toggle="tooltipa"] a').tooltip();
  })

  //menu click
  $(".hamburger").click(function(){
    $("body").toggleClass("menu-open");
  });
 
  $('.header-nav > ul li a ').on('click', function(){ 
    $('body').removeClass('menu-open');
  });




$('.hamburger').keypress(function (e) {
  var key = e.which;
  if(key == 13)
  {
    $('.hamburger').click();
    return false;
  }
});

//social media button click
$(".btnSocialmedia").click(function(){
  $(".nav-socialmedia").toggleClass("show");
}); 


 
// scroll top script
$(document).ready(function () {

  $(window).scroll(function () { 
    var headerHeight = $(".header").height();
    if ($(this).scrollTop() > headerHeight) {
        $('body').addClass("toFixed");
    } else {
      $('body').removeClass("toFixed");
    }
  });

});


$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').show();
    } else {
        $('.scrollup').hide();
    } 
  });
  
});




 
  $(".slick-class-1").slick({
    slidesToShow: 1,
    infinite: false,
    arrows: true,
    dots: false
  });


  $(".slick-class-2").slick({ 
    rtl: ($('html').attr('lang') == 'ar') ? true : false,
		dots: true,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: 6,
    slidesToScroll: 1,
    
    responsive: [{
  
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
      }

    },{
  
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }

    }, {
  
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }

    }, {

      breakpoint: 575,
      settings: {
        slidesToShow: 1, 
        dots: false
      }

    }]

  });


  

})(jQuery);