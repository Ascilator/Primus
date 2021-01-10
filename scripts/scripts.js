jQuery(function () {
    var slider_main = $('.slider_body');






    slider_main.slick({
        infinite: false,
        dots: true,
        rows: 0,
        speed: 400,
        easing: 'ease',
        waitForAnimate: false,
        touchMove: true,
        touchTreshhold: 50,
        slidesToShow: 1,
        slideToScroll: 1,
        nextArrow: $('.slider_arrow_next'),
        prevArrow: $('.slider_arrow_prev'),
        autoplay: true,
        appendDots: $('.slider_dots'),
    });


    $('.big_slider_body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        draggable: false,
        swipe: false,

        centerMode: true,
        asNavFor: '.small_slider_body'
    });
    $('.small_slider_body').slick({
        slidesToShow: 3,
        //variableWidth: true,
        infinite: false,
        slidesToScroll: 1,
        asNavFor: '.big_slider_body',
        dots: false,
        arrows: false,
        //centerMode: true,
        focusOnSelect: true
    });



    $('.burger').click(function () {
        $(this).toggleClass('_active');
        $('.menu').toggleClass('_active');
        $('body').toggleClass('_lock');
    })
    $('#input').on('focus', function () {
        $('.search').addClass('_active');

    })
    $('#input').on('blur', function () {
        $('.search').removeClass('_active');

    });
    $('.choose_item').click(function () {
        $(this).siblings().children('.icon').removeClass('_active');
        $(this).children('.icon').addClass('_active');
    })

    $('.color').click(function () {
        $('.color').removeClass('_active');
        $(this).addClass('_active');
    })
    $('.catalog_item>.heart').click(function () {

        $(this).toggleClass('_active');
    })



    function drop_down() {
        $('.filter_drop_down_title').click(function () {
            $(this).siblings('.drop_down_body').slideToggle();
            $(this).toggleClass('_active');
        })
        $('.check_item').click(function () {
            $(this).toggleClass('_active');
        })
    }
    drop_down();
});


