$(function(){
    $('.main_slider').slick({
        arrows:false,
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
    });

    $('.btn i.xi-angle-left').on('click',function(){
        $('.main_slider').slick('slickPrev');
        });
    $('.btn i.xi-angle-right').on('click',function(){
        $('.main_slider').slick('slickNext');
        });

    $('.emblem .e_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 9,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    });

    $('.e_btn i.xi-angle-left-min').on('click',function(){
        $('.e_slider').slick('slickPrev');
        });
    $('.e_btn i.xi-angle-right-min').on('click',function(){
        $('.e_slider').slick('slickNext');
        });

    $('.start>li>a').on('click', function(){
        if($(window).width() < 769) {
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.deep_01').slideUp();
        }
    
    });
    
    
        $(window).on('resize', function(){
            $('.deep_01').removeAttr('style')
        })    
                
    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });


})