const correctPassword = "wakeUP";

$(document).ready(function () {
    var currentPage = 0;
    var pages = $('.page');


    function scrollToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < pages.length) {
            $('html, body').animate({
                scrollTop: $(pages[pageIndex]).offset().top
            }, 800);
            currentPage = pageIndex;
        }
    }


    $(window).on('wheel', function (e) {
        if (e.originalEvent.deltaY > 0) {

            scrollToPage(currentPage + 1);
        } else {

            scrollToPage(currentPage - 1);
        }
    });


    scrollToPage(currentPage);
});


function showPage(pageId) {
    // Hide all pages


    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
}


const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

// Check if the elements are correctly selected
console.log(sidebar, sidebarToggle);

// Event listener to toggle the sidebar visibility
sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('show'); // Toggle the 'show' class to slide the sidebar in/out
});