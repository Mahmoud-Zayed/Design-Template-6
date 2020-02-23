$(document).ready(function () {
    'use strict';
    /// scroll-nav /=>>> Scroll To Top ///
    $(window).scroll(function () {
       var scroll = $(this).scrollTop();
       if (scroll >= 200) {
           $('.scroll-nav').slideDown();     
       }
       else {
           $('.scroll-nav').fadeOut();
       }
                                // fadeIn();
                                // fadeOut();
                                // show();
                                // hide();
    });

    /// Smoth Scroll ///
    $('.header li a').click(function () {
        $('html , body').animate({
            scrollTop : $("#" + $(this).data('value')).offset().top - 60
        }, 1000);
    });
    // or //  ==>>   // $('.header li a').click(function () {
                     //     $('html , body').animate({
                     //         scrollTop : $($(this).attr("href")).offset().top - 55
                     //     }, 1000);
                     // });

    // Nice Scroll
    $("body").niceScroll({
        cursorcolor:"#ffff73",
        cursorwidth:"15px",
        zindex: "99999",
        cursorborder: "0",
        cursorborderradius: "3px"
        });                 

});