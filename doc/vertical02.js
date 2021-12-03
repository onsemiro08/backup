$(function(){
    $('.main_visual').slick({
        // arrows:false,
        autoplay:true,
        dots:true,
        prevArrow:'<div class="prev"><i class="xi-arrow-left"></div>',
        nextArrow:'<div class="next"><i class="xi-arrow-right"></div>',
    });

    // $('.main_visual').on('afterChange', function(e,s,c){ < 이벤트, 슬릭, 콘솔
    // 콘솔 로그로 번호 찍히는 거 확인 > 
    // $('.main_visual figure').eq(1).addClass('on');
    // 1번이 되면 on을 적용한다

    $('.main_visual figure').eq(1).addClass('on');
    $('.main_visual').on('afterChange', function(e,s,c){
        $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');
    // $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');
    // 콘솔+1 (클론) on을 붙였다가 뗐다가
    })

})