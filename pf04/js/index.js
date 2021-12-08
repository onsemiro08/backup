$(function(){

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        pauseOnFocus:false,
        });

        $('.main_btn i.xi-angle-right-thin').on('click',function(){
            $('.main_slider').slick('slickPrev');
            });
        $('.main_btn i.xi-angle-left-thin').on('click',function(){
            $('.main_slider').slick('slickNext');
            });        

    $('.dotmaxnum').html("0"+$(".slick-dots > li").size());

    $('.lang_link').on('click', function(){
        $('.lang_link .sub').toggleClass('on')
        $(this).toggleClass('on');
        //top_banner2 .case 클릭했을 때 발생하는 이벤트 - css에서 클로즈 오픈으로 바꿈
        });


    $('.title03 .trophy_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:4,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    
    // $('.title03 .trophy_slider figure').eq(4).addClass('on');
    // $('.title03 .trophy_slider figure').eq(8).addClass('on');
    // $('.title03 .trophy_slider').on('afterChange', function(e,s,c){
    //     $('.title03 .trophy_slider figure').removeClass('on');
    //     $('.title03 .trophy_slider figure').eq(c+4).addClass('on')
    //     .end().eq(c+8).addClass('on');
    // }); css .on 붙이고 오버레이 먹이는 코드

    $('.link select').on('change', function(){
        var lnk = $(this).val();
        if(lnk) window.open(lnk);
    });
    
    $('.mopen').on('click', function(){
        $('.header').toggleClass('on');
    })

    $('.header nav>ul>li>a').on('click', function(){
        if($('.header').hasClass('on')){
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.deep01').slideUp();
            // 이것의 부모의 형제에서 ul을 찾아라 (클래스 명으로 사용 가능)
        }
        });

        $(window).on('resize', function(){
        if($(window).width() > 768) $('.header').removeClass('on');
        $('.deep01').removeAttr('style');
    });

    $('.toTop').on('click', function(){
        $('html, body').animate({scrollTop:0},600)
    });

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        // if(sct>400) {
        //    $('#toTop').fadeIn()
        // }else{
        //      $('#toTop').fadeOut()
        // }
        sct>400 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();

    }) //상단으로 올라가는 화살표, 위에 있을 때는 안 보임
})