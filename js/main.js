$(document).ready( function() {

    //меню бургер
    $('.header__burger').click( function(event) {
        $('.header__burger, .nav').toggleClass('active'); 
        $('body').toggleClass('lock'); 
    });
});