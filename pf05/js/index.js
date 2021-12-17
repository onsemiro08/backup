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

    $('.main_slider figure').eq(1).addClass('on');
    $('.main_slider').on('afterChange', function(e,s,c){
        $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
    });

    $('.main_arrows i.xi-angle-left').on('click',function(){
        $('.main_slider').slick('slickPrev');
        });
    $('.main_arrows i.xi-angle-right').on('click',function(){
        $('.main_slider').slick('slickNext');
        });

    $('.h_right_c').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:3,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    let pSlider=$('.p_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:5,
        autoplaySpeed:4000,
        pauseOnFocus:false,
        pauseOnHover:false,
        focusOnSelect:true,
        dots:true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]

    });

    $('.p_btn i.xi-angle-left-min').on('click',function(){
        $('.p_slider').slick('slickPrev');
        });
    $('.p_btn i.xi-angle-right-min').on('click',function(){
        $('.p_slider').slick('slickNext');
        });

    let pFigure=$(".p_slider .p_slider_f");
    pFigure.eq(7).addClass("on")
    pSlider.on("afterChange", function(e,s,c){
    pFigure.eq(c+7).addClass("on").siblings().removeClass("on");
    });

    $('.toTop').on('click', function(){
        $('html, body').animate({scrollTop:0},600)
    });

    $('.mopen').on('click', function(){
        $('.header').toggleClass('on');
    })
    
    $(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    sct>400 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
    })

});