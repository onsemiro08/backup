$(function(){

$('.top_banner i').on('click', function(){
    $('.top_banner .case').toggleClass('on')
    $(this).toggleClass('on');
    //top_banner2 .case 클릭했을 때 발생하는 이벤트 - css에서 클로즈 오픈으로 바꿈
    });

    $('.right .menu_popup').click(function() {
        $('.popup').fadeIn();
            });

        $('.exit').click(function() {
        $('.popup').fadeOut();

        });

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false
    });

//        $('.main_btn i.xi-angle-right-thin').on('click',function(){
//            $('.main_slider').slick('slickPrev');
//            });
//        $('.main_btn i.xi-angle-left-thin').on('click',function(){
//            $('.main_slider').slick('slickNext');
//            });        

});