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

let hover = () => {
    let ua = navigator.userAgent.toLowerCase();
    $(window).on('load resize orientationchange', function() {
        if (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0) {
            $(".nav__item , .nav__subitem , .nav__sublink").removeClass('hover');
            console.log("sp");
        } else {
            $(".nav__item , .nav__subitem , .nav__sublink").addClass('hover');
            console.log("pc");
        }
    });
}

$(function(){
    hover();
});











// $(function () {
//     var ua = navigator.userAgent.toLowerCase();
//     if (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0) {
//         // スマートフォンの場合実行
//
//     } else if (ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0) {
//         // タブレットの場合実行
//
//     } else {
//         // PC用の場合実行
//
//     }
// })
// コード選択コード選択
