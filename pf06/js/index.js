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

    $('.f_slider01').slick({
        arrows:false,
        autoplay:false,
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

    $('.f_slider02').slick({
        arrows:false,
        autoplay:false,
        slidesToShow:4,
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

    $('.f_slider03').slick({
        arrows:false,
        autoplay:false,
        slidesToShow:4,
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
    


})