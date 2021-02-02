$(document).ready( function() {

    //меню бургер
    $('.header__burger').click( function(event) {
        $('.header__burger, .nav').toggleClass('active'); 
        $('body').toggleClass('lock'); 
    });

    //плавная анимация прокручивания страницы по ссылке
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href'); 
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500); 
    });

});