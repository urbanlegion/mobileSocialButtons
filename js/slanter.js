/**
 * Created by yearzero on 1/9/2017.
 */
$(document).ready(function (e) {

/*    $('#slanted_left').on('mouseenter', function (e) {
        $(this).animate({
            zIndex: 5,
            width: '800'
        }, 1200);
    });*/
    $(this).on('click', function (e) {
        console.log('e.target.id: '+ e.target.id );
        if(e.target.id == 'slanted_center'){
            $('.slanted').animate({
                width: 510
            }, 800, function () {
                $('.super_awesome').animate({
                    left: 200
                }, 300, function () {
                    $(this).animate({

                    },450, function () {
                        $('.fa-snapchat-ghost').addClass('go_neon_yellow');
                        $('.fa-facebook-f').addClass('go_neon_blue');
                        $('.fa-instagram').addClass('go_neon_red');
                    })
                });
            });

        }
       /* if(e.target.id == 'slanted_center'){
            console.log('asdasd');
            $('#slanted_center').animate({
                width: '500',
                clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 10% 100%)'
            }, 1200);
            $('#slanted_left').animate({
                width: '300'
            }, 1200);
            $('.super_awesome').animate({
                left: 220
            }, 1000, function () {
                $(this).animate({
                    left:175
                },150).addClass('go_neon');
            });
        }else if(e.target.id == 'slanted_left'){
            $('#slanted_left').animate({
                zIndex: 5,
                width: '800'
            }, 1200);
            $('#slanted_center').animate({
                zIndex: 5,
                width: '400'
            }, 1200);
        }*/


    });

});