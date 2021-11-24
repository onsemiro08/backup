$(function(){
//----------------------------

//스크롤할 때 헤드변경 addClass

$(window).on('scroll',function(){
    var sct=$(window).scrollTop();
    console.log(sct);
    if(sct>0){
        $('#header').addClass('on')
    }else{
        $('#header').removeClass('on')
    }
});


$('.main_slider').slick({
    arrows:false, // 버튼 삭제
    autoplay:true, // 자동으로 넘어감
    pauseOnHover:false,
    // vertical:true, 위로 올라가는 슬라이드
    // fade:true, 장면 전환
    });



    //제품 슬라이드

$('.pr_slider').slick({
        slidesToShow: 4, // 슬라이드 쇼 몇 개 돌아갈 지, 돌아가는 예비 복사해둬야 함
        arrows:false,
        autoplay:true,
        dots:true, // 버튼 리스트 생성
    });
$('.xe i.xi-arrow-left').on('click', function(){
    $('.pr_slider').slick('slickPrev');
});    
$('.xe i.xi-arrow-right').on('click', function(){
    $('.pr_slider').slick('slickNext');
});
//----------------------------
});