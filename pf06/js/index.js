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
                    slidesToShow: 6,
                }
            },
        ]
    });

    $('e_btn i.xi-angle-left-min').on('click',function(){
        $('.e_slider').slick('slickPrev');
        });
    $('e_btn i.xi-angle-right-minn').on('click',function(){
        $('.e_slider').slick('slickNext');
        });


})