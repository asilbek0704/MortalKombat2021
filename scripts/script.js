



if ($(document).innerWidth() <= 450) {

    $('.overlay .exit').after($('.video'));

    $(".video-trailer").prop("controls", true);

    $(document).on('scroll', () => {
        $('.video').css({
            top: `${($(window).innerHeight() - $('.video').height()) / 2 + $(window).scrollTop()}px`,
            left: `${$(window).innerWidth() / 2}px`,
        })


        $('.overlay .exit').css({
            top: `${$(window).scrollTop() + 15}px`,
            right: `15px`
        })

    })


    $('.overlay').on('click', (e) => {
        if (e.target == $('.overlay img.exit')[0] || e.target == $('.overlay')[0]) {
            $('.overlay').css('display', 'none');
            $('.video-trailer').trigger('pause');
            $('.video-trailer')[0].currentTime = 0;
            $('.trailer').prop('disabled', false);

        }
    })


    $('.trailer').on('click', () => {
        $('.overlay').css('display', 'block');

        $('.video-trailer').trigger('play');

        $('.video').css({
            top: `${($(window).innerHeight() - $('.video').height()) / 2 + $(window).scrollTop()}px`,
            left: `${$(window).innerWidth() / 2}px`,
        })

        $('.trailer').prop('disabled', true);

    })



    $('.order').on('click', () => {
        $('.book-overlay').css({
            visibility: 'visible',
            opacity: 1
        })

        $('.book-overlay').on('click', (e) => {
            if (e.target == $('.book img.exit')[0] || e.target == $('.book-overlay')[0]) {
                $('.book-overlay').css({
                    visibility: 'hidden',
                    opacity: 0
                });
            }
        })

        $('.book').css({
            position: 'absolute',
            top: `${($(window).innerHeight() - $('.book').height()) / 2 + $(window).scrollTop()}px`,
        })
    })


    $(document).on('scroll', () => {
        $('.book').css({
            position: 'absolute',
            top: `${($(window).innerHeight() - $('.book').height()) / 2 + $(window).scrollTop()}px`,
        })
    })



} else {
    $('.trailer').on('mouseover', () => {
        $('.banner').css('opacity', '0');
    }).on('mouseout', () => {
        $('.banner').css('opacity', '1');
    })





    $('.trailer').on('click', () => {
        $('.video-trailer').trigger('play');

        $('.banner').css({
            transition: 0,
            transform: 'translateZ(0.4px)'
        });

        let playORpause = 'play';


        $('.video').on('click', () => {
            if (playORpause == 'play') {
                $('.video-trailer').trigger('pause');
                playORpause = 'pause';
            } else {
                $('.video-trailer').trigger('play');
                playORpause = 'play';
            }

        })

        $('.trailer').prop('disabled', true);

    })






    $(document).on('mousemove', () => {
        if ($('.video-trailer')[0].currentTime == $('.video-trailer')[0].duration) {
            $('.video-trailer')[0].currentTime = 0;
            $('.video').html(`<video src="./video/trailer.mp4" class="video-trailer" poster="./img/bg-2.jpg">
            </video>`);
            $('.banner').css({
                transition: '0.5s',
                transform: 'translateZ(0.5px)',
                opacity: 1
            });

            $('.trailer').prop('disabled', false);
        }
    })


    // let videoEndTimeout = setTimeout(() => {
    // $('.video-trailer')[0].currentTime = 0;
    // $('.video').html(`<video src="./video/trailer.mp4" class="video-trailer" poster="./img/bg-2.jpg">
    // </video>`);
    // $('.banner').css({
    //     transition: '0.5s',
    //     transform: 'translateZ(0.5px)'
    // });
    // }, ($('.video-trailer')[0].duration - $('.video-trailer')[0].currentTime) * 1000)




    $('.order').on('click', () => {
        $('.book-overlay').css({
            visibility: 'visible',
            opacity: 1
        })

        $('.book-overlay').on('click', (e) => {
            if (e.target == $('.book img.exit')[0] || e.target == $('.book-overlay')[0]) {
                $('.book-overlay').css({
                    visibility: 'hidden',
                    opacity: 0
                });
            }
        })
    })





}