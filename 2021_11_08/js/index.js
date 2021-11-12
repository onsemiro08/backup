$(function(){
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:3000,
        pauseOnFocus:false,
        infinite:true,
        dots:true,
    });

    $('#main_visual .main_btn i.xi-angle-left').on('click',function(){
        $('.main_slider').slick('slickPrev');
    });

    $('#main_visual .main_btn i.xi-angle-right').on('click',function(){
        $('.main_slider').slick('slickNextv');
    });

    $('.event_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    autoplaySpeed:3000,
    pauseOnFocus:false,
    infinite:true,
    });

});