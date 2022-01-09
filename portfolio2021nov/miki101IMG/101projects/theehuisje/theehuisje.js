// mobile nav
function openOverlay() {
    document.getElementById("overlay").classList.toggle("overlay");
    document.getElementById("topBeam").classList.toggle("topBeamClose");
    document.getElementById("middleBeam").classList.toggle("middleBeamClose");
    document.getElementById("bottomBeam").classList.toggle("bottomBeamClose");
}

// parallax movement
function updateTopPar(){ 
var position = $(window).scrollTop();
var speed = 0.6;
$('#topParallax').each(function() { 
    var $element = $(this);
    // move positioning
    var height = $element.height()-230;
    // move vertical
    $(this).css('background-position', '50%'+ Math.round((height - position) * speed) + 'px'); 
   }); 
};
$(window).bind('scroll', updateTopPar);

function updateBottomPar(){ 
    var position = $(window).scrollTop();
    var speed = 0.3;
    $('#bottomParallax').each(function() { 
        var $element = $(this);
        // move positioning
        var height = $element.height()+900;
        // move horizontal
        $(this).css('background-position', Math.round((height - position) * speed) + 'px'); 
       }); 
};
$(window).bind('scroll', updateBottomPar);