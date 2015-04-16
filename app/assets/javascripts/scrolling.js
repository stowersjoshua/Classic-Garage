function hideLeft(){

    a = $("#left-nav");
    b = $(".menucats");
    c = $("#top-nav");
    d = $(".categoryname");

    a.fadeOut(500);
    b.fadeOut(500);
    c.fadeIn(500);
    d.fadeIn(500);

    $(".maincontent").css({
        'marginLeft' : '0',
        'marginTop' : '0'
    });
}

function showLeft() {
    $(".maincontent").css({
        'marginLeft' : $(".gas-pump").width(),
        'marginTop' : '5vh'
    });

    a = $("#left-nav");
    b = $(".menucats");
    c = $("#top-nav");
    d = $(".categoryname");

    a.fadeIn(500);
    b.fadeIn(500);
    c.fadeOut(500);
    d.fadeOut(500);

}

function layoutManager() {
    if ( $(window).width() < $(window).height() * 1.05 ) {
        hideLeft();
    }
    else {
        showLeft();
    }
}


$(document).ready(function () {

    //Responsive
    layoutManager();

    //Flip banner sign lights on and off
    var flip = 0;
    setInterval( function () {
            if (flip == 0) {
                $(".bulb").attr("fill","#ba0d27");
                flip = 1;
            } else {
                $(".bulb").attr("fill","#FFEA82");
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

$(window).resize(function() {
    layoutManager();
});
