/*
insert in HTML:
$(document).ready(function() {
    $('#toTopButton').makeToTopButton('#toTopButton');
})
<div id="toTopButton">
    -- img --
</div>
add CSS
*/
$.fn.makeToTopButton = function(button) {
    $(button).hide();
    $(window).scroll(function() {
        if($(document).scrollTop() > 200) {
            $(button).show('slow');
        }
        else {
            $(button).hide('slow');
        }
    });
    $(button).on('click', function() {
        $(document).scrollTop(0);
    });
};
/*
insert in HTML:
$(document).ready(function() {
    $('#iFrameContainer').makeIFrame('.frameLink','#iFrameContainer','#iFrameClose')
})
<div id="iFrameContainer">
            <img id="iFrameClose" src="mikiIMG/close-48px.png" alt="close"/>
            <iframe id="webDesigns" name="webDesigniFrame" title="webdesigns"></iframe>
        </div>
add CSS
*/
//iFrame
$.fn.makeIFrame = (function(link,container,close) {
    // iFrame links
    $(link).on('click', function() {
        $(container).css('height', '100%');
    });
    $(close).on('click', function() {
        $(container).css('height', '0%');
    });
});