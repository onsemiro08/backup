$(function(){
    //--------------------------------------------------

    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'Training', 'profile'],
        afterLoad:function(origin, destination, direction){
            let idx=destination.index;
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });

    $('.cover_btn').on('click', function(){
        $(this).toggleClass('on')
        $('#cover').fadeToggle();
    });
    
    let cloneMenu = $('nav>ul').clone();
    console.log(cloneMenu);
    $('#cover').append(cloneMenu);
    //cloneMenu.appendTo('#cover')
    
    $('#cover a').on('click', function(){
        $('.cover_btn').toggleClass('on')
        $('#cover').slideUp();
    });
    
    $('#cover').on('scroll wheel', function(){
        return false;
    })
    
    $('.t_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:2,
        autoplaySpeed:4000,
        pauseOnFocus:false,
        pauseOnHover:false,
        focusOnSelect:true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]

    });

    //-----------------------------------------------------
});