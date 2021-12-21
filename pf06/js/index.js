$(function(){
    $('.main_slider').slick({
        arrows:false,
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
    });

    $('.btn i.xi-angle-left').on('click',function(){
        $('.main_slider').slick('slickPrev');
        });
    $('.btn i.xi-angle-right').on('click',function(){
        $('.main_slider').slick('slickNext');
        });



})