$(function(){

    $('.main_visual .popup i').on('click', function(){
        $('.popup').toggleClass('on');
    }) 


    $('.main_slider').slick({
        arrows:false,
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });

    $('.p_slider').slick({
        arrows:false,
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });

    $('.tab_menu>li').on('click', function(){
        var $this= $(this); //자기자신
        var idx=$(this).index(); //자기자신의 번호
        //console.log($this,idx);
        //$('.tab_content>div').eq(idx).show().siblings.hide();
        $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
        $this.addClass('on').siblings().removeClass('on');
    });

    $('.n_slider').slick({
        arrows:false,
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

})