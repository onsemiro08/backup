$(function(){
    $("#bgndVideo").YTPlayer({videoURL:'https://youtu.be/ohyAukVAKK0',
    containment:'#visual',
    autoPlay:true,
    mute:true, 
    startAt:0,
    opacity:1,
    showControls:false,
});

$('#visual i.xi-pause').on('click', function(){
    $("#bgndVideo").YTPPause();
});
$('#visual i.xi-play').on('click', function(){
    $('#bgndVideo').YTPPlay();
});
$('#visual i.xi-tv').on('click', function(){
    $('#bgndVideo').YTPPlay();
});

    // -------------------------------------------------------------


// -------------------------------------------------------------
})