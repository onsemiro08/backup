$(function(){

    $('#top_banner .container i').on('click', function(){
        $(this).parent().parent().slideUp();
    });
    // 상단 광고

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        autoplaySpeed:3000,
        pauseOnhover:false,
        pauseOnFocus:false,
        infinite:true,
    });

    // 기본 슬라이드 (자동으로 넘어감)

    $('#main_visual .main_btn i.xi-angle-left').on('click',function(){
        $('.main_slider').slick('slickPrev');
    });

    $('#main_visual .main_btn i.xi-angle-right').on('click',function(){
        $('.main_slider').slick('slickNext');
    });

    // 앞뒤 버튼 작동

    $('#visual04 .container').slick({
        slidesToShow: 3, // 슬라이드 쇼 몇 개 돌아갈 지, 돌아가는 예비 복사해둬야 함
        arrows:false,
        autoplay:true,
        dots:true, // 버튼 리스트 생성

    });
});