$(function(){
//---------------------------------------------------------------
// $('#top_banner .container i').on('click', function(){
    // $(this).parent().parent().hide();
// });

$('#top_banner .container i').on('click', function(){
    $(this).parent().parent().slideUp(); //slideUp 요소를 위로 사라지게 만듦
});

$('#top_banner2 i').on('click', function(){
    $('#top_banner2 .case').toggleClass('on')
    $(this).toggleClass('on');
    //top_banner2 .case 클릭했을 때 발생하는 이벤트 - css에서 클로즈 오픈으로 바꿈
    });

$('#top_banner3 i').on('click', function(){
        $('#top_banner3 .case').slideToggle(200); //sliderToggle 슬라이드 위아래로
        $(this).toggleClass('on');
    });

$('#top_banner4 i').on('click', function(){
        $('#top_banner4 .case').toggleClass('on')
        $(this).toggleClass('on');
        //top_banner2 .case 클릭했을 때 발생하는 이벤트 - css에서 클로즈 오픈으로 바꿈
        });

$('#bottom_banner i').on('click', function(){
            $('#bottom_banner4 .case').slideToggle(200);
            $(this).toggleClass('on');
            });

$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},600)
});

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        // if(sct>400) {
        //    $('#toTop').fadeIn()
        // }else{
        //      $('#toTop').fadeOut()
        // }
        sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
        $('#scroll_banner').css({top:600+sct})

    }) //상단으로 올라가는 화살표, 위에 있을 때는 안 보임

    $('#left_banner i').on('click',function(){
        $('#left_banner').toggleClass('on');
        $(this).toggleClass('on');
    })

    $('#right_banner i').on('click',function(){
        $('#right_banner').toggleClass('on');
        $(this).toggleClass('on');
    })

//---------------------------------------------------------------

});
