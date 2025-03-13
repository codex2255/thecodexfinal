const correctPassword = "wakeUP";

$(document).ready(function() {
    var currentPage = 0;
    var pages = $('.page');

    // Function to navigate to the next page
    function scrollToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < pages.length) {
            $('html, body').animate({
                scrollTop: $(pages[pageIndex]).offset().top
            }, 800);
            currentPage = pageIndex;
        }
    }

    // Listen for scroll events
    $(window).on('wheel', function(e) {
        if (e.originalEvent.deltaY > 0) {
            // Scroll down
            scrollToPage(currentPage + 1);
        } else {
            // Scroll up
            scrollToPage(currentPage - 1);
        }
    });

    // Initially scroll to the first page
    scrollToPage(currentPage);
});