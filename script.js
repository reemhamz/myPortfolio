// You can also pass an optional settings object
// below listed default settings
// AOS.init({
//     // duration: 1200, // values from 0 to 3000, with step 50ms
// });


$(document).ready(function () {
    // e.preventDefault;
    AOS.init({

        once: true,

    });


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
    })

    $('.goToHome').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        })
    });

    $('.goToAboutMe').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#aboutMe').offset().top
        })
    });

    $('.goToSkills').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        })
    });

    $('.goToPortfolio').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        })
    });

    $('.goToContact').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        })
    });

});