$(function(){

    
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