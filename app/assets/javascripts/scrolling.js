function hideLeft(){

    a = $("#left-nav");
    b = $(".menucats");
    c = $("#top-nav");
    d = $(".categoryname");
    e = $('#wrapper');
    f = $('.maincontent');

    a.fadeOut(500);
    b.fadeOut(500);
    c.fadeIn(500);
    d.fadeIn(500);

    a.css({ 'opacity' : '0' });

    f.animate({
        'marginLeft' : '0',
        'marginTop' : '0'
    }, 500);

    e.animate({ 'padding-top' : '0' }, 500);
}

function showLeft() {

    a = $("#left-nav");
    b = $(".menucats");
    c = $("#top-nav");
    d = $(".categoryname");
    e = $('#wrapper');
    f = $('.maincontent');

    e.animate({ 'padding-top' : '90px' }, 500);  //wrapper
    c.fadeOut(500);     //top-nav
    a.fadeIn(1000);      //left-nav

    f.animate({     //maincontent
        'marginLeft' : $(".gas-pump").width(),
        'marginTop' : '5vh'
    }, 500);

    a.animate({ 'opacity' : '1' }, 500); //left-nav

    b.fadeIn(500);      //menucats
    d.fadeOut(500);     //categoryname

}

function layoutManager() {
    if ( $(window).width() < $(window).height() * 1.05 ) {
        hideLeft();
        //hideLeft();
    }
    else {
        showLeft();
        //showLeft();
    }
}

$(window).resize(function() {
    layoutManager();
});

$(document).ready(function () {
    layoutManager();

    $('.maincontent').animate({     //maincontent
        'marginLeft' : $(".gas-pump").width(),
        'marginTop' : '5vh'
    }, 500);

    setInterval( function () {
            layoutManager();
        },
        1500 );



    //Flip banner sign lights on and off
    var flip = 0;
    setInterval( function () {
            if (flip == 0) {
                $(".bulb").attr("fill","#ba0d27");      //Lights off...
                flip = 1;
            } else {
                $(".bulb").attr("fill","#FFEA82");      //Lights on...
                flip = 0;
            }
        },
        3000 );
    //End banner light flipper

    //Banner links
    $(".menu-link").on('click', function(event) {
        window.location = "/"
    });
    $(".photos-link").on('click', function(event) {
        window.location = "/photo"
        //Turbolinks.visit("/photo")
    });
    $(".about-link").on('click', function(event) {
        window.location = "/about"
    });
    $(".carshow-link").on('click', function(event) {
        window.location = "/carshow"
    });
    $(".contact-link").on('click', function(event) {
        window.location = "/contact"
    });

    //Admin banner links
    $(".admin-users-link").on('click', function(event) {
        window.location = "/admin/users"
    });
    $(".admin-carshow-link").on('click', function(event) {
        window.location = "/admin/post"
    });
    $(".admin-menu-link").on('click', function(event) {
        window.location = "/admin/post"
    });
    $(".admin-photo-link").on('click', function(event) {
        window.location = "/admin/photos"
    });

    //End banner links

    //Auto scroller
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 100 //50
            }, 1000);
        }
    });
    //End auto scroller
});
