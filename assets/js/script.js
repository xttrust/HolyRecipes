// Functionality to change navbar styles when page is hovered 
$(document).ready(function() {
    
    $(window).scroll(function() {
        // style when scrolling 
        if ($(window).scrollTop() > 50) {
            $('#navbar').removeClass('bg-transparent').addClass('bg-scroll')
            $('.nav-link').addClass('text-white');
            $('#active').addClass('scroll-active').removeClass('active');
            $('#logo').addClass('hide');
            $('#scroll-logo').removeClass('hide');
        // style when scrolled to top
        } else {
            $('#navbar').removeClass('bg-scroll').addClass('bg-transparent');
            $('.nav-link').removeClass('text-white').addClass('text-dark');
            $('#active').addClass('active').removeClass('scroll-active')
            $('#logo').removeClass('hide');
            $('#scroll-logo').addClass('hide');
        }
    });
});

