function layoutManager() {
    //If the screen's width is less than ~100%, hide the left-side div, create a top one.
    if ( $(window).width() < $(window).height() * 1.05 ) {
        //$("#wrapper").css('marginLeft', 0);
        $("#top-nav").fadeIn(500);
        $("#mynavbar").fadeOut(500);
    }
    else {
        $(".maincontent").css('marginLeft', $(".gas-pump").width());
        $("#top-nav").fadeOut(500);
        $("#mynavbar").fadeIn(500);
    }
}


$(document).ready(function () {

    layoutManager();


    $(".menu-link").on('click', function(event) {
        alert("Loading menu page...");
    });

    $(".maincontent").css('marginLeft', $(".gas-pump").width());


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