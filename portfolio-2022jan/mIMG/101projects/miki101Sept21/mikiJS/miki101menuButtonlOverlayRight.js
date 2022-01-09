/*
HTML:
INSERT SCRIPT:
    $(document).ready(function() {
        $('#menuButton').makeMenuButton('#menuButton','#topBeam','#middleBeam','#bottomBeam','#menuOverlay');
    });
MENUBUTTON:
    <div id="menuButton">
       <div id="topBeam"></div>
       <div id="middleBeam"></div>
       <div id="bottomBeam"></div>
   </div>
   MENU OVERLAY HTML:
    <div id="menuOverlay" class="menuOverlayClose">
       <div id="menuOverlayContent">
           --- additional content/ links ---
       </div>
   </div>
LINK STYLESHEET 'menuButtonFullOverlayTop.css': */
$(document.head).append('<link rel="stylesheet" href="mikiCSS/miki101menuButtonOverlayRight.css"/>')
/* THE BUTTON */
$.fn.makeMenuButton = function(button,top,middle,bottom,over,link) {
    $(top).addClass('topBeam');
    $(middle).addClass('middleBeam');
    $(bottom).addClass('bottomBeam');
    $(button).on('click', function() {
        $(top).toggleClass('topBeamClose');
        $(middle).toggleClass('middleBeamClose');
        $(bottom).toggleClass('bottomBeamClose');
        $(over).toggleClass('menuOverlay');
        $(link).toggleClass('linkOpen');
    });
};
