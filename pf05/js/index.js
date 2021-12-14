$(function(){

    $('.top_banner i').on('click', function(){
        $('.top_banner .case').slideToggle(500); //sliderToggle 슬라이드 위아래로
        $(this).toggleClass('on');
    });

//$('.top_banner i').on('click', function(){
//    $('.top_banner .case').toggleClass('on')
//    $(this).toggleClass('on');
    //top_banner2 .case 클릭했을 때 발생하는 이벤트 - css에서 클로즈 오픈으로 바꿈
//    });

    $('.right .menu_popup').click(function() {
        $('.popup').fadeIn();
            });

        $('.exit').click(function() {
        $('.popup').fadeOut();

        });

    var mS=$('.main_slider').slick({
        arrows:false,
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });

    $('.main_visual .btn li').on('click', function(){
        var idx=$(this).index();
        mS.slick('slickGoTo', idx)
    });

    $('.h_right_c').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:3,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
    });

    $('.history .h_right .h_right_c figure').eq(1).addClass('on');
    $('.history .h_right .h_right_c figure').on('afterChange', function(e,s,c){
        $('.history .h_right .h_right_c figure').removeClass('on');
        $('.history .h_right .h_right_c figure').eq(c+3).addClass('on').end()
    }); //css .on 붙이고 오버레이 먹이는 코드

//        $('.main_btn i.xi-angle-right-thin').on('click',function(){
//            $('.main_slider').slick('slickPrev');
//            });
//        $('.main_btn i.xi-angle-left-thin').on('click',function(){
//            $('.main_slider').slick('slickNext');
//            });        

});