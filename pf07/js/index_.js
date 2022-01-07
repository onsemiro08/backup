$(function(){

    $('.main_visual .popup i').on('click', function(){
        $('.popup').toggleClass('on');
    }) 

    $('nav .menu_title>li').on('click', function(){
        if($('nav').hasClass('on')) {
            $(this).addClass('on').siblings().removeClass('on');
            $(this).siblings().find('.deep01').stop().slideUp();
            //$('.depth03').stop().slideUp();
            //$(this).find('.depth02').stop().slideToggle();
        }

    });

    $('.deep01>ul>li').on('click', function(){
        if($(window).width() < 769) {
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.deep02').slideUp();
        }
    });

    $(window).on('resize', function(){
        $('.deep01').removeAttr('style');
        $('.deep02').removeAttr('style');
        $('nav').removeClass('on');
    });

    $('.header i').on('click', function(){
        $(this).toggleClass('on');
        $('nav').toggleClass('on');
    });

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
        slidesToShow: 2,
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });

    $('.tab_menu>li').on('click', function(){
        var $this= $(this); //자기자신
        var idx=$(this).index(); //자기자신의 번호
        //console.log($this,idx);
        //$('.tab_content>div').eq(idx).show().siblings.hide();
        $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
        $this.addClass('on').siblings().removeClass('on');
    });

    $('.n_slider').slick({
        arrows:false,
        autoplay:false,
        autoplaySpeed:5000,
        breakpoint: 769,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                }
            },
        ],
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.s_slider').slick({
        arrows:false,
        autoplay:false,
        slidesToShow: 4,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });

    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });

})