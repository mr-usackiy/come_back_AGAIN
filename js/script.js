
$(document).ready(function () {



    //анмация при нажании 
    $('#but').click(function () {
        $('.burger_menu').toggleClass('menu');//меню
    })

    $('.close').click(function () {
        $('.burger_menu').toggleClass('menu');//меню
    })

    $('.nav_search_text').click(function () {
        $('.popup_search').toggleClass('visible');//поиск
    })

    //анимация ПАРОЛАКС
    //$(window).scroll(function () {
     //   var st = $(this).scrollTop();
        //$('.intro_content').css({
            //"transform": "translate(0%, -" + st / 6 + "%"
        //});
    //});




    //анимация при скроллинеге 

    const down = document.querySelector('.down');
    const header_nav = document.querySelector('.header_nav');
    const scrollContent_wrap = document.querySelectorAll('.content_wrap');
    const scrollContent_wrap_2 = document.querySelectorAll('.content_wrap-2');
    const scrollContent_wrap_3 = document.querySelectorAll('.content_wrap_3');

    const headerFixed = () => {
        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY;
            let downCenter = down.offsetHeight / 2;

            if (scrollTop >= downCenter) {
                $('.header_nav').addClass('fixed')
                down.style.marginTop = '${header_nav.offsetHeight}px';
            } else {
                header_nav.classList.remove('fixed')
                down.style.marginTop = '0px';
            }

        });
    };



    const scrollContent_wrap_ = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollContent_wrap.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight;
            if (windowCenter >= scrollOffset) {
                el.classList.add('wrap_animation');
            } else {

            }
        })
    }



    const scrollContent_wrap_2_ = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollContent_wrap_2.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight * 2;
            if (windowCenter >= scrollOffset) {
                el.classList.add('wrap_animation');
            } else {

            }
        })
    }



    const scrollContent_wrap_3_ = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        scrollContent_wrap_3.forEach(el => {
            let scrollOffset1 = el.offsetTop + el.offsetHeight / 200;
            if (windowCenter >= scrollOffset1) {
                el.classList.add('wrap_animation');
            } else {

            }
        })
    }



    $(".icon_down").on("click", "a", function (event) {
        event.preventDefault();
        var icon_down = $(this).attr('href'),
            top = $("#qw").offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });





    scrollContent_wrap_2_();
    scrollContent_wrap_();
    scrollContent_wrap_2_();
    scrollContent_wrap_3_();

    window.addEventListener('scroll', () => {
        headerFixed();
        scrollContent_wrap_();
        scrollContent_wrap_2_();
        scrollContent_wrap_3_();
    });
})


