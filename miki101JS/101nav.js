
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
/* TO TOP BUTTON */
$.fn.makeToTopButton = function(button) {
    $(button).hide();
    $(window).scroll(function() {
        if($(document).scrollTop() > 300) {
            $(button).show('slow');
        }
        else {
            $(button).hide('slow');
        }
    });
    $(button).on('click', function() {
        $(document).scrollTop(0), 'slow';
    });
};
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
/* FASHION GALLERY */
// images
function $images(id,name) {
    this.id = id;
    this.name = name;
    this.setImages = setImages;
}
var $image = new Array();
$image[0] = new $images("01","blazerInProgress.png");
$image[1] = new $images("02","insidePocket.png");
$image[2] = new $images("03","newyearseveDress.png");
$image[3] = new $images("04","orangeBlazer.jpg");
$image[4] = new $images("05","orangeSleeve.jpg");
$image[5] = new $images("06","cancanTorso.png");
$image[6] = new $images("07","sinterklazenMontmartre.png");
// template image container
var $imageTemplate = '<figure class="imageContainer hasBackground"><img src="miki101IMG/101projects/miki101sept21/mikiIMG/pics/\'{{name}}\'"/></figure>';
// set images in container
function setImages() {
    var $imagesContainer = [];
    // set all images in container
    for (let i = 0; i < $image.length; i++) {
        var $imageContainer = $imageTemplate;
        $imageContainer = $imageContainer.replace('\'{{name}}\'', $image[i].name);
        $imagesContainer.push($imageContainer);
        $('#fashionGallery').html($imagesContainer);
    }
    // gallery slides
    var $sliders = $('#fashionGallery');
    $sliders.cycle({
        fx: 'turnDown',
        speed: 300,
        delay: -4000,
        height: $sliders.height(),
        width: $sliders.width(),
        fit: true
    });
};