$(function(){
    //----------------------------------------------
    $('#main').fullpage({
        anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
        // 순서대로 페이지 이름 붙이기
        //navigation: true,
        afterLoad: function(origin, destination, direction){
            let txt = $('.navbar>li').eq(destination.index).find('a').text()
            $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
            $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
            $('.now').text(txt);
            destination.index==0 ? $('.header').fadeIn() : $('.header').fadeOut();
            destination.index==0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
            // if(destination.index=0) {$('.header').fadeIn()} else {$('.header').fadeOut()}
        },
        
    });



    // function cook(재료1,재료2){
    //     let 삶은라면=재료1+ "과" + 재료2 + "로 삶은 라면";
    //     return 삶은라면;
    // }

    // let 라면 = cook("신라면", "스프");
    // console.log(라면);

    // 로그에 신라면은 스프로 삶은라면 으로 나옴
    //----------------------------------------------
    // { } 객체 [ ] 스트링? $ 
})