let winH = $(window).height();
    winW = $(window).width();
    ua = navigator.userAgent.toLowerCase();

  $(window).on({
    "load":function(){
      hoverToggle();
    },

    "scroll":function(){
      fadeIn();
      parallax();
    },

    "resize":function(){
      hoverToggle();
    },

    "orientationchange":function(){
      hoverToggle();
    }
  })

// hover 切り替え

let hoverToggle = function(){
  let ua = navigator.userAgent.toLowerCase();
      winW = $(window).width();
      devW = 1080;
      hover = ".nav__item,.nav__subitem,.nav__sublink,.btn,.btn--big";

  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('mobile') > 0 ) {
      $(hover).removeClass('hover');
      $(".nav--header").css("display","none");

  } else if(winW < devW){
      $(hover).removeClass('hover');
      $(".nav--header").css("display","none");

  } else{
      $(hover).addClass('hover');
      $(".nav--header").css("display","flex");
  }
}

// fade in animation
let fadeIn = function(){
  let scrollTop = $(window).scrollTop(),
      scrollBottom = scrollTop + winH;
      winH = $(window).height();

  $(".animation__fade-bace").each(function(){
    let itemTop = $(this).offset().top,
        itemHeight =$(this).height(),
        fadeStart = itemTop + (itemHeight / 2);

        if (scrollTop > fadeStart - winH){
          $(this).addClass('animation__fade-in');
        }
  });
}

// parallax効果
let parallax = function(){
    if(ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('mobile') > 0 ) {
      $(".home__2section-img").css("background-size","cover");
    }else{
      let scrollY = $(this).scrollTop();
          parallaxFix = $(".parallax__fix");
          parallaxFixPosOT = parallaxFix.offset().top;
          targetFactor = 0.5;
          parallaxFixStart = parallaxFixPosOT - winH;

          console.log("offsetのTop位置");
          console.log(parallaxFixPosOT);

      if(scrollY > parallaxFixStart){
        parallaxFix.css('background-position-y', (scrollY - parallaxFixPosOT) * targetFactor + 'px');
      }else{
        parallaxFix.css('background-position','center top');
      }
    }
}

// headeer menu btnをクリック（タッチ）した際のnav menuの表示非表示設定
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

//ハーモニカメニュー時に表示されるnav__btnをクリック（タッチ）した際のnav__subitemの表示非表示設定
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
