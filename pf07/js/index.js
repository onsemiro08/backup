$(function(){

    $('.main_visual .popup i').on('click', function(){
        $('.popup').toggleClass('on');
    }) 


    $('.main_slider').slick({
        arrows:false,
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });

    $('.p_slider').slick({
        arrows:false,
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });
})