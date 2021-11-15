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
LINK STYLESHEET '101menuButtonOverlay.css': */
//$(document.head).append('<link rel="stylesheet" href="miki101CSS/101assets/101menuButtonOverlay.css"/>')
/* THE BUTTON */
$.fn.makeMenuButton = function(button,top,middle,bottom,over) {
    $(top).addClass('topBeam');
    $(middle).addClass('middleBeam');
    $(bottom).addClass('bottomBeam');
    $(button).on('click', function() {
        $(top).toggleClass('topBeamClose');
        $(middle).toggleClass('middleBeamClose');
        $(bottom).toggleClass('bottomBeamClose');
        $(over).toggleClass('menuOverlay');
    });
};