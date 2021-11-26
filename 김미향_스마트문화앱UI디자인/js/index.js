$(function(){

    $('.mopen').on('click', function(){
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    // -------------------------------------
        $(window).on("scroll", function(){
            var sct=$(window).scrollTop(); //var let cost
            sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on'); // 삼향조건식
        });

    $('.auto').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true
    });

    $('#franchise i.xi-angle-left-thin').on('click', function(){
        $('.auto').slick('slickPrev');
    });

    $('#franchise i.xi-angle-right-thin').on('click', function(){
        $('.auto').slick('slickNext');
    });




    $('.gnb>li>a').on('click', function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.sub_menu').slideUp();
    }
    });
    $(window).on('resize', function(){
    if($(window).width()>768) $('nav').removeAttr("style")
});

});
