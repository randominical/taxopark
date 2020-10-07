$(document).ready(function(){
  $('.header__menu, .header__logo, .question, .discount__bottom').on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

$('.menu__icon').click(function(event) {
  $(this).toggleClass('active');
  $('.menu__body').toggleClass('active');
  $('body').toggleClass('lock');
})

$('.menu__link, .header__logo').click(function(event) {
  $('.menu__icon').removeClass('active');
  $('.menu__body').removeClass('active');
  $('body').removeClass('lock');
})
//==============
var vhHeight = $("body").height();
var chromeNavbarHeight = vhHeight - window.innerHeight;
$('body').css({ height: window.innerHeight, marginTop: chromeNavbarHeight });
//==============
//линии
function widthFunc(){
  var lineWidth = $(".benefits__box").outerWidth() + 'px';
  $(".benefits__line").css('width', lineWidth );
};
widthFunc();
$(window).resize(function(){
  widthFunc();
});

function heightFunc1(){
  var lineHeight_1 = $(".benefits__pic_1").offset().top + ( $(".benefits__pic_1").innerHeight() / 2) - $(".benefits__icon").offset().top - ( $(".benefits__icon").innerHeight() / 2) + 'px';
  $(".benefits__line_1").css('height', lineHeight_1 );
};
heightFunc1();
$(window).resize(function(){
  heightFunc1();
});

function heightFunc2(){
  var lineHeight_2 = $(".benefits__pic_4").offset().top - $(".benefits__pic_1").offset().top + 'px';
  $(".benefits__line_2").css('height', lineHeight_2 );
};
heightFunc2();
$(window).resize(function(){
  heightFunc2();
});

function heightFunc3(){
  var lineHeight_3 = $(".benefits__pic_5").offset().top - $(".benefits__pic_4").offset().top + 'px';
  $(".benefits__line_3").css('height', lineHeight_3 );
};
heightFunc3();
$(window).resize(function(){
  heightFunc3();
});

function heightFunc4(){
  var lineHeight_4 = $(".benefits__pic_8").offset().top - $(".benefits__pic_5").offset().top + 'px';
  $(".benefits__line_4").css('height', lineHeight_4 );
};
heightFunc4();
$(window).resize(function(){
  heightFunc4();
});

function heightFunc5(){
  var lineHeight_5 = $(".benefits__pic_9").offset().top - $(".benefits__pic_8").offset().top + 'px';
  $(".benefits__line_5").css('height', lineHeight_5 );
};
heightFunc5();
$(window).resize(function(){
  heightFunc5();
});

function heightFunc6(){
  var lineHeight_6 = $(".review__title").offset().top - $(".work__title").offset().top + 'px';
  $(".work__line").css('height', lineHeight_6 );
};
heightFunc6();
$(window).resize(function(){
  heightFunc6();
});
//=================

$(document).ready(function(){
    $('.review__slider').slick({
      autoplay: false,
      draggable: true,
      arrows: true,
      dots: true,
      slidesToShow: 3,
      responsive:[
        {
            breakpoint:1800,
            settings: {
                slidesToShow:2,
            }
        },
        {
          breakpoint:1199,
            settings: {
                slidesToShow:1,
            }
        }
    ]
  });
});