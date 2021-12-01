$(function(){

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });


    $('.lang_link').on('click', function(){
        $('.lang_link .sub').toggleClass('on')
        $(this).toggleClass('on');
        //top_banner2 .case 클릭했을 때 발생하는 이벤트 - css에서 클로즈 오픈으로 바꿈
        });

    $('.gnb>li>a').on('click', function(){
        if($(window).width() < 769) {
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.deep01').slideUp();
        }
        });
        $(window).on('resize', function(){
        if($(window).width()>768) $('nav').removeAttr("style")
    });

})