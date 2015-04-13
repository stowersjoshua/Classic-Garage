function hideLeft(){
    //$("#wrapper").css('marginLeft', 0);

    $("#mynavbar").fadeOut(500);
    $("#top-nav").fadeIn(500);
    $(".menucats").fadeOut(50);
    $(".categoryname").fadeIn(50);
    $(".maincontent").css({
        'marginLeft' : '0',
        'width' : '100%'
    });

    //$("#top-nav").show();
    //$(".menucats").hide();
    //$("#mynavbar").hide();
    //$(".categoryname").show();
}

function showLeft() {
    $(".maincontent").css('marginLeft', $(".gas-pump").width());
    $("#top-nav").fadeOut(500);
    $("#mynavbar").fadeIn(500);
    $(".menucats").fadeIn(50);
    $(".categoryname").fadeOut(50);

    //$("#top-nav").hide();
    //$(".menucats").show();
    //$("#mynavbar").show();
    //$(".categoryname").hide();
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

    layoutManager();

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


    //$(".maincontent").css('marginLeft', $(".gas-pump").width());


    $('a[href^="#"]').on('click', function(event) {
        //event.preventDefault();
        //$('html, #wrapper').animate({scrollTop:$(this.hash).offset().top}, 500);

        var target = $( $(this).attr('href') );
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
            //$('div.wrapper').animate({
                scrollTop: target.offset().top - 50
            }, 1000);
        }
    });


});

$(window).resize(function() {
    layoutManager();
});

$(".gas-pump").css('bottom', 0);
