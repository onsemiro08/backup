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

    $('.p_slider').slick({
        arrows:false,
        autoplay:false,
        slidesToShow:5,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        focusOnSelect:true,
        dots:true,
    });

    $('.p_btn i.xi-angle-left-min').on('click',function(){
        $('.p_slider').slick('slickPrev');
        });
    $('.p_btn i.xi-angle-right-min').on('click',function(){
        $('.p_slider').slick('slickNext');
        });     

    let contentItem=$(".p_slider figure");
    contentItem.eq(6).addClass("on")
    contentSlider01.on("afterChange", function(e,s,c){
    contentItem.eq(c+5).addClass("on").siblings().removeClass("on");
    });


});