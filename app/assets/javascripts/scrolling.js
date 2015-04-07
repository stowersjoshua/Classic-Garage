$(document).ready(function () {


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

    //If the screen's width is less than ~100%, hide the left-side div, create a top one.
    if ( $(window).width() < $(window).height() * 0.80 ) {
        //alert("Skinny");
    }
    else {

    }


    //Else, hide top one, show left one.
    $(".maincontent").css('marginLeft', $(".gas-pump").width());



});