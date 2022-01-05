
$(document).ready(function () {
    $('.nav_search_text').click(function () {
        $('.popup_search').toggleClass('visible');
    })




    $(window).scroll(function () {
        var st = $(this).scrollTop();
        $('.intro_content').css({
            "transform": "translate(0%, -" + st / 8 + "%"
        });
    });


    $('.red_more').click(function () {
        $('.content_wrap-2').css('background-image', 'url(/img/bromo_2.jpg)');
    });



    const down = document.querySelector('.down');
    const header_nav = document.querySelector('.header_nav');


    const headerFixed = () => {
        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY;
            let downCenter = down.offsetHeight /2;

            if (scrollTop >= downCenter) {
                $('.header_nav').addClass('fixed')
                down.style.marginTop = '${header_nav.offsetHeight}px';
            } else {
                header_nav.classList.remove('fixed')
                down.style.marginTop = '0px';
            }

        });
    };

headerFixed();
window.addEventListener('scroll', () => {
    headerFixed();
});
})


