// Functionality to change navbar styles when page is hovered 
$(document).ready(function() {
    
    $(window).scroll(function() {
        // style when scrolling 
        if ($(window).scrollTop() > 50) {
            $('#navbar').removeClass('bg-transparent').addClass('bg-scroll')
        // style when scrolled to top
        } else {
            $('#navbar').removeClass('bg-scroll').addClass('bg-transparent');
        }
    });
});