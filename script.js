AOS.init();

// You can also pass an optional settings object
// below listed default settings
// AOS.init({
//     // duration: 1200, // values from 0 to 3000, with step 50ms
// });


$(document).ready(function () {

    $('.pageNav').hide();

    $('.menuIcon').on('click', function () {
        $('.pageNav').show();
        $('.menuIcon').hide();
    });

    $('.exIcon').on('click', function () {
        $('.pageNav').hide();
        $('.menuIcon').show();
    })

    $('.navItem').on('click', function () {
        $('.pageNav').hide();
        $('.menuIcon').show();
    })

    AOS.init(
        {
            duration: 800
        }
    );
});


