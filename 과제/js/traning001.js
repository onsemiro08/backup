$(function(){

    $('#top_banner .container i').on('click', function(){
        $(this).parent().parent().slideUp();
    });
    // 상단 광고

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
    });

    // 기본 슬라이드 (자동으로 넘어감)

    $('#main_visual .main_btn i.xi-angle-left').on('click',function(){
        $('.main_slider').slick('slickPrev');
    });

    $('#main_visual .main_btn i.xi-angle-right').on('click',function(){
        $('.main_slider').slick('slickNext');
    });

    // 앞뒤 버튼 작동

    });