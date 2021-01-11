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
    $('.like').click(function () {

        $(this).toggleClass('_active');
    })
    $('.buy_btn').click(function () {

        if ($(this).hasClass('_active') == false) {

            var cart = $('.cntrl.user');
            var cloned = $(this).parent().parent().clone();
            cloned.addClass('_cloned');
            cloned.insertAfter($(this).parent().parent());

            cloned.css({
                'left': $(this).parent().parent().position().left,
                'top': $(this).parent().parent().position().top,
            });
            go_to_cart();


        }
        function do_n() { }
        $(this).addClass('_active');
        $(this).text('В корзине');





        function go_to_cart() {
            if ($('html').width() > 1000) {
                cloned.css({
                    'left': cart.parent().parent().offset().left + $('.header>.wrapper').offset().left + 20,
                    'transform': 'translate(0%, 0) scale(0)',
                    'top': cart.parent().parent().offset().top,
                    'opacity': '0'
                });
            } else {
                cloned.css({
                    'left': '100%',
                    'transform': 'translate(-100%, 0) scale(0)',
                    'top': cart.parent().parent().offset().top,
                    'opacity': '0'
                });
            }

        };
    })
    $('.big_form').on('submit', function (e) {
        e.preventDefault();
        var inputs = $('.input._req');
        for (var i = 0; i < inputs.lenght; i++) {
            if (inputs[i].hasClass('_error')) {
                return;
            }
        }
        $('.big_form')[0].reset();

    });
    function validate() {

        console.log($('.input._req').not('_tel').children())
        $('.input._req').not('._tel').children('input').on('blur', function () {

            if ($(this).val() == '') {
                $(this).parent().addClass('_error');
            } else {
                $(this).parent().removeClass('_error');
                $(this).parent().addClass('_sucsess');
            }
        });
        $('.input._req._tel').children('input').on('blur', function () {




            if ($(this).val() == '' || $(this).val()[0] != '+' || $(this).val().length != 13) {


                $(this).parent().addClass('_error');
            } else {
                $(this).parent().removeClass('_error');
            }
        });

    }
    validate();
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


