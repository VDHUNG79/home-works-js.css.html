// Toogle Bars 01:02:00
$(document).ready(function () {
    $nav = $(".nav");
    $toogleCollapse = $(".toogle-collapse");

    // Click event on toogle menu 
    $toogleCollapse.click(function () {
        $nav.toggleClass("collapse"); // Class collapse is not create yet. Go into main.css and style .collapse
    });
});