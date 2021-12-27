$(function(){
//--------------------------------------------------    

$(window).on('scroll', ()=>{
    let sct=$(window).scrollTop();
    console.log(sct)
    sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on')
    //if(sct > 0) {$('#header')}.addClass('on')}else{$('#header').removeclass('on')}
});

$('.main_slider').slick({
    autoplay:true,
    autoplayspeed:3000,
    arrows:false,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});

$('.main_slider figure').eq(0).addClass('on')
$('.main_slider').on('afterChange', function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
    
});

//--------------------------------------------------    
})