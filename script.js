AOS.init();

// You can also pass an optional settings object
// below listed default settings
// AOS.init({
//     // duration: 1200, // values from 0 to 3000, with step 50ms
// });


$(document).ready(function () {

    $('.pageNav').hide();

    $('.menuIcon').on('click', function () {
        
        $('.pageNav').show(300, function () {
            //animation complete
        });
        $('.menuIcon').hide(); 
        
    });

    $('.exIcon').on('click', function () {
        $('.pageNav').hide(500, function () {
            
        });
        $('.menuIcon').show();
    })

    $('.navItem').on('click', function () {
        $('.pageNav').hide();
        $('.menuIcon').show();
    })

    
});


