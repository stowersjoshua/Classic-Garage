function hideLeft(){
    $("#left-nav").fadeOut(500);
    $("#top-nav").fadeIn(500);
    $(".menucats").fadeOut(50);
    $(".categoryname").fadeIn(50);
    $(".maincontent").css({
        'marginLeft' : '0',
        'width' : '100%'
    });
}

function showLeft() {
    $(".maincontent").css('marginLeft', $(".gas-pump").width());
    $("#top-nav").fadeOut(500);
    $("#left-nav").fadeIn(500);
    $(".menucats").fadeIn(50);
    $(".categoryname").fadeOut(50);
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
        alert("Coming soon!");
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
                scrollTop: target.offset().top - 50 //50
            }, 1000);
        }
    });
    //End auto scroller
});

$(window).resize(function() {
    layoutManager();
});
