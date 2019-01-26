$(document).ready(function () {

    $('.but').click(function () {
        $('html').animate({scrollTop: 0}, 1000);

    });


    $(window).scroll(function () {

        $('.mov').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass('bounceIn');

            }
        });
        $('.mot').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass('lightSpeedIn');

            }
        });

        $('.mov3').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass('tada');

            }

        });
        $('.mov4').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass('fadeInLeft');

            }

        });
        $('.mov5').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass('fadeInRight');

            }

        });
        $('.mov6').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass('flash');

            }

        });
        $('.mov7').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 900) {
                $(this).addClass('bounceInUp');

            }

        });
        if ($(window).scrollTop() > 800) {
            $('.but').css({'display': 'block', 'transition': '0.5s'})

        } else {
            $('.but').css({'display': 'none'})
        }

        if ($(window).width() > 1015 && $(window).scrollTop() > 5) {

            $('.links').attr('class', 'cool-link');
            $(".navba").attr("class", "scrollNav");
            $(".li1").attr("class", "scrollli");
            $('.shareicons').css({'margin-left': '40px', 'margin-top': '30px', 'transition': '0.5s'})


        } else {
            $(".scrollli").attr("class", "li1");
            $(".scrollNav").attr("class", "navba");
            $('.cool-link').attr('class', 'links');
            $('.shareicons').css({'margin-left': '20px', 'margin-top': '10px', 'transition': ''});
        }


    })
});
