$(document).ready( function() {

    //меню бургер
    $('.header__burger').click( function(event) {
        $('.header__burger, .nav').toggleClass('active'); 
        $('body').toggleClass('lock'); 
        $('.nav-link').click(function(event) {
            console.log("work")
            $('.header__burger, .nav').removeClass('active'); 
            $('body').removeClass('lock'); 
        });
    });

    //плавная анимация прокручивания страницы по ссылке
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href'); 
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500); 
    });

    //анимация появляющихся объектов

    const animateItems = $('.anim_items'); 

    if (animateItems.length>0) {
        window.addEventListener('scroll', amimOnscr);
        function amimOnscr() {
            for (let index = 0; index < animateItems.length; index++) {
                const animItem = animateItems[index];
                const animHeight = animItem.offsetHeight; 
                const animItemOffset = offset(animItem).top; 
                const animStart = 4; 

                let animItemPoint = window.innerHeight - animHeight / animStart; 
                if (animHeight > window.innerHeight) {
                    let animItemPoint = window.innerHeight - window.innerHeight /  animStart; 
                }

                if ((pageYOffset>animItemOffset-animItemPoint) && pageYOffset<(animItemOffset+animHeight)) {
                    animItem.classList.add('active'); 
                }
                
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(), 
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top+scrollTop, left: rect.left+scrollLeft}
    }

    setTimeout(() => {
        amimOnscr();
    }, 300);

});