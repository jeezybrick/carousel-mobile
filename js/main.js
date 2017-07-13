$(document).ready(function () {

    var defaultCarouselConfig = {
        style: 'coverflow',
        spacing: -0.5,
        buttons: 'custom',
        touch: false,
        click: false,
        buttonPrev: '<div class="circle"></div>',
        buttonNext: '<div class="circle"></div>',
        centerImageClickUrl: 'https://www.youtube.com'
    };

    var swipeCarouselConfig = $.extend({}, defaultCarouselConfig);
    var clickImagesConfig = $.extend({}, defaultCarouselConfig);

    swipeCarouselConfig.touch = true;
    swipeCarouselConfig.buttons = false;
    clickImagesConfig.click = true;

    $("#click-buttons-carousel").flipster(defaultCarouselConfig);

    $("#click-images-carousel").flipster(clickImagesConfig);

    $("#swipe-images-carousel").flipster(swipeCarouselConfig);

});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("backdrop-wrapper").style.opacity = "0.8";
    document.getElementById("backdrop-wrapper").style.right = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("backdrop-wrapper").style.opacity = "0";
    document.getElementById("backdrop-wrapper").style.right = "auto";
}
