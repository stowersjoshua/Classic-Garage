function hideLeft(){

    a = $("#left-nav");
    b = $(".menucats");
    c = $("#top-nav");
    d = $(".categoryname");

    a.fadeOut(500);
    b.fadeOut(500);
    c.fadeIn(500);
    d.fadeIn(500);

    //$(".maincontent").css({
    //    'marginLeft' : '0',
    //    'marginTop' : '0'
    //});

    $('.maincontent').animate({
        'marginLeft' : '0',
        'marginTop' : '0'
    }, 500);

    //$("#wrapper").css( 'paddingTop' , '0' );
    $('#wrapper').animate({ 'padding-top' : '0' }, 500);
}

function showLeft() {
    //$(".maincontent").css({
    //    'marginLeft' : $(".gas-pump").width(),
    //    'marginTop' : '5vh'
    //});

    //$(".wrapper").css( 'paddingTop', '120px' );





    a = $("#left-nav");
    b = $(".menucats");
    c = $("#top-nav");
    d = $(".categoryname");
    e = $('#wrapper');
    f = $('.maincontent');

    e.animate({ 'padding-top' : '90px' }, 500);

    a.css({
        'opacity' : '0',
        'display' : 'inherit'
    });

    f.animate({
        'marginLeft' : $(".gas-pump").width(),
        'marginTop' : '5vh'
    }, 500);






    //a.fadeIn(500);      //left-nav
    //$("#left-nav").delay(500).animate({ 'opacity' : '1' }, 500);
    a.delay(500).animate({ 'opacity' : '1' }, 500);

    b.fadeIn(500);      //menucats
    c.fadeOut(500);     //top-nav
    d.fadeOut(500);     //categoryname

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
