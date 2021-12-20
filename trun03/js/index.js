const HD=document.querySelector('#hd');

window.addEventListener('scroll', ()=>{
    let sct=window.scrollY;
    if(sct>0) {
        document.querySelector('#hd').classList.add('on')
    }
})

const swiper2 = new Swiper('.main_slide', {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 100,
    autoPlay:{
        delay:2000,
    },
    pagination: {
        el: '.main_visual .page',
        type: 'fraction',
    },
    // 클래스 명은 html 이랑 통일하기만 하면 됨
    navigation: {
        nextEl: '.main_visual .btn_next',
        prevEl: '.main_visual .btn_prev',
      },
      autoplayDisableOnInteraction:false,
    
});