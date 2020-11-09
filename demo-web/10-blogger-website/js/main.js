// responsive for carousel 03:02:00
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    }, 
    560: {
        items: 2
    }, 
    960: {
        items: 3
    }
}


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
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],

        // responsive for carousel 03:02:00
        responsive: responsive
    });

    // Click to scroll top 02:58:00
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // AOS Animation
    AOS.init();

});