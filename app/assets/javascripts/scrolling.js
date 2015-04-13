function layoutManager() {
    //If the screen's width is less than ~100%, hide the left-side div, create a top one.
    if ( $(window).width() < $(window).height() * 1.05 ) {
        //$("#wrapper").css('marginLeft', 0);
        //Vertically slide in the menu cat headers
        $("#top-nav").show(); //Make it slide in vertically
        $(".menucats").hide();
        $("#mynavbar").hide(); //Make it slide out Horizontally
    }
    else {
        $(".maincontent").css('marginLeft', $(".gas-pump").width());
        $("#top-nav").hide();
        $(".menucats").show();
        $("#mynavbar").show();
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
