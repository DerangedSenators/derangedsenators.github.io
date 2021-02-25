$(document).ready(function() {
    var navpos = $('#nav').offset();
    console.log(navpos.top);
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > navpos.top) {
            $('#nav').addClass('navbar-fixed-top');
        }
        else {
            $('#nav').removeClass('navbar-fixed-top');
        }
    });
});
