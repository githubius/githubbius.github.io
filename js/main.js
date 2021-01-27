$('#burger').click(function () {
    $('#burger').toggleClass('burger--active');
    $('#navbar').toggleClass('navbar--show');
});


$('.gallery-item').click(function() {
    if (!$('.slider').hasClass('slick-initialized')) {
        window.scrollTo(0, -100);
        var index = $(this).parent().find('.gallery-item').index(this)
        document.body.requestFullscreen();
        $('.container').css("max-width", "100%")
        $('body').css("background-color", "#000")
        $('.gallery-caption,.topline,.footer').hide();
        $('.slider-button--close').show()
        $('.slider').slick({
            slide: '.gallery-item',
            prevArrow: '<span class="slider-button--left"></span>',
            nextArrow: '<span class="slider-button--right"></span>',
            initialSlide: index,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        // arrows: false,
                    }
                }
            ]
        });     
    } else {
        $('.slider').slick('slickNext')
    }
});

$('.slider-button--close').click(function() {
    if ($('.slider').hasClass('slick-initialized')) {
        document.exitFullscreen();
        $('.container').css("max-width", "")
        $('body').css("background-color", "")
        $('.slider').slick('unslick');
        $('.gallery-caption,.topline,.footer').show();
        $('.slider-button--close').hide()
    };
})


