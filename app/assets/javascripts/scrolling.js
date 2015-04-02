$(document).ready(function () {




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