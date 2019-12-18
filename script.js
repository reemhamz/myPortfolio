

// You can also pass an optional settings object
// below listed default settings
// AOS.init({
//     // duration: 1200, // values from 0 to 3000, with step 50ms
// });


$(document).ready(function () {
    // e.preventDefault;
    AOS.init();


    $('.pageNav').hide();

    $('.menuIcon').on('click', function (e) {
        e.preventDefault();
        $('.pageNav').show();
        $('.menuIcon').hide();
    });

    $('.exIcon').on('click', function (e) {
        e.preventDefault();
        $('.pageNav').hide();
        $('.menuIcon').show();
    })

    $('.navItem').on('click', function (e) {
        e.preventDefault;
        $('.pageNav').hide();
        $('.menuIcon').show();
    }, 900)

    $('.goToHome').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        })
    }, 900);

    $('.goToAbuotMe').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#aboutMe').offset().top
        })
    }, 900);

    $('.goToSkills').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        })
    }, 900);

    $('.goToPortfolio').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        })
    }, 900);

    $('.goToContact').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 900)
    });

});

