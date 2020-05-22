$("#btnTriggerHeader").on("click" , function(){
  if($(this).hasClass("active")){
    $(this).toggleClass("active");
    $(".nav--header").fadeToggle(500);
  }else{
    $(this).toggleClass("active");
    $(".nav--header").fadeToggle(500);
  }
  // $(this).toggleClass("active");
  // // $(".header-nav").toggleClass("dn");
  // $(".header-nav").fadeToggle(500);
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

    if (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('mobile') > 0 ) {
        $(".nav__item , .nav__subitem , .nav__sublink").removeClass('hover');
        console.log("sp");
        console.log(winW);
    } else if(winW < devW){
        $(".nav__item , .nav__subitem , .nav__sublink").removeClass('hover');
        $(".nav--header").css("display","none");
        console.log("pc < 1080");
        console.log(winW);
    } else{
        $(".nav__item , .nav__subitem , .nav__sublink").addClass('hover');
        $(".nav--header").css("display","flex");
        console.log("pc > 1080");
        console.log(winW);
    }
});
