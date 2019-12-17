AOS.init();

// You can also pass an optional settings object
// below listed default settings
// AOS.init({
//     // duration: 1200, // values from 0 to 3000, with step 50ms
// });


$(document).ready(function () {
    $(".menuIcon").on('click', function () {
        $("nav").toggleClass("menu_show");
    });

    AOS.init(
        {
            duration: 800
        }
    );
});


