let winH = $(window).height();

$("#btnTriggerHeader").on("click" , function(){
  let btnTriggerLine = $(".btn__trigger-header-line");
  if($(this).hasClass("active")){
    $(this).toggleClass("active");
    btnTriggerLine.toggleClass("active");
    $(".nav--header").fadeToggle(500);
    $(".btn__trigger-header-txt--menu").css("display","block");
    $(".btn__trigger-header-txt--close").css("display","none");
  }else{
    $(this, ".btn__trigger-header-line").toggleClass("active");
    btnTriggerLine.toggleClass("active");
    $(".nav--header").fadeToggle(500);
    $(".btn__trigger-header-txt--menu").css("display","none");
    $(".btn__trigger-header-txt--close").css("display","block");
  }
});

$(".nav__btn").on("click ", function(){
  if($(this).hasClass("active")){
    $(this).children().addClass("fa-angle-down");
    $(this).children().removeClass("fa-angle-up");
    $(this).toggleClass("active");
  }else{
    $(this).toggleClass("active");
    $(this).children().removeClass("fa-angle-down");
    $(this).children().addClass("fa-angle-up");
  }
  $("+ .nav__sublist > .nav__subitem", this).toggleClass("nav__subitem--active");
});



$(window).on('resize load orientationchange scroll', function() {
    let ua = navigator.userAgent.toLowerCase();
        winW = $(window).width();
        devW = 1080;
        hover = ".nav__item,.nav__subitem,.nav__sublink";

    if (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('mobile') > 0 ) {
        $(hover).removeClass('hover');

    } else if(winW < devW){
        $(hover).removeClass('hover');
        $(".nav--header").css("display","none");

    } else{
        $(hover).addClass('hover');
        $(".nav--header").css("display","flex");

    }
});

// fade inさせるアニメーション
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop(),

      scrollBottom = scrollTop + winH;

  $(".animation__fade-bace").each(function(){
    let itemTop = $(this).offset().top,
        itemHeight =$(this).height(),
        fadeStart = itemTop + (itemHeight / 2);

        if (scrollTop > fadeStart - winH){
          $(this).addClass('animation__fade-in');
        }
  });
});


$(function(){
    let parallaxFix = $(".parallax__fix");
        parallaxFixPosOT = parallaxFix.offset().top;
        targetFactor = 0.5;
        windowH = $(window).height();
        parallaxFixStart = parallaxFixPosOT - winH;

  $(window).on('scroll',function(){
    let scrollY = $(this).scrollTop();

    if(scrollY > parallaxFixStart){
      parallaxFix.css('background-position-y', (scrollY - parallaxFixPosOT) * targetFactor + 'px');

    }else{
      parallaxFix.css('background-position','center top');
    }
  });
});
