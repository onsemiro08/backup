$(function(){
// ----------------------------------

$('.btn li').on('click', slidingbal);
function slidingbal() {
    let idx=$(this).index();
    console.log(idx);
    $('.case').animate({top:-205*idx}, 1000, "easeOutBounce")
}

// ----------------------------------
})