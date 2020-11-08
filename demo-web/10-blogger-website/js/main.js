// Toogle Bars 01:02:00
$(document).ready(function () {
    $nav = $(".nav");
    $toogleCollapse = $(".toogle-collapse");

    // Click event on toogle menu 
    $toogleCollapse.click(function () {
        $nav.toggleClass("collapse"); // Class collapse is not create yet. Go into main.css and style .collapse
    });

    // Owl Carousel for Blog
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,

        // Change to arrow icons
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });

});