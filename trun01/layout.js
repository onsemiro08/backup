$(function(){
//-----------------------------------------------
$(window).on("scroll", function(){
    var sct=$(window).scrollTop(); //var let cost
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on'); // 삼향조건식
    // if(sct > 0){
    //     $('.header').addClass('on')}
    // else {
    //     $('.header').removeClass('on')}
    //     if ($(window).scrollTop() > 0) {


    //         $('.header').addClass('on')
//     } else {
//         $('.header').removeClass('on')
//     }
// 스크롤하면 on 되고 아니면 없앤다
});



$('.main_slider').slick({
    arrows:false,
    fade:true,
    dots:true,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});


})