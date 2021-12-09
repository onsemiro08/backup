$(function(){

$('.top_banner i').on('click', function(){
    $('.top_banner .case').toggleClass('on')
    $(this).toggleClass('on');
    //top_banner2 .case 클릭했을 때 발생하는 이벤트 - css에서 클로즈 오픈으로 바꿈
    });

})