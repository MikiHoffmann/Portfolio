
/* THE MENU BUTTON */
$.fn.makeMenuButton = function(button,top,middle,bottom,over,link) {
    $(top).addClass('topBeam');
    $(middle).addClass('middleBeam');
    $(bottom).addClass('bottomBeam');
    $(button).on('click', function() {
        $(top).toggleClass('topBeamClose');
        $(middle).toggleClass('middleBeamClose');
        $(bottom).toggleClass('bottomBeamClose');
        $(over).toggleClass('menuOverlay');
    });
    $(link).on('click', function() {
        $(top).toggleClass('topBeamClose');
        $(middle).toggleClass('middleBeamClose');
        $(bottom).toggleClass('bottomBeamClose');
        $(over).toggleClass('menuOverlay');
    });
};