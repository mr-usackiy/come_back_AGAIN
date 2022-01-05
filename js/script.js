
$(document).ready(function () {
    


    //анмация при нажании 
    $('.nav_search_text').click(function () {
        $('.popup_search').toggleClass('visible');//поиск
    })

    $('.red_more').click(function () {
            $('.content_wrap-2').css('background-image', 'url(/img/bromo_2.jpg)');// бэкграунд картинка на Бромо
        });

    //анимация ПАРОЛАКС
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        $('.intro_content').css({
            "transform": "translate(0%, -" + st / 8 + "%"
        });
    });


   

//анимация при скроллинеге 

    const down = document.querySelector('.down');
    const header_nav = document.querySelector('.header_nav');
    const scrollWrapper = document.querySelectorAll('.content_wrap');

    const scrollwraps = () =>{
        let windowCenter = (window.innerHeight /2) + window.scrollY;
        scrollWrapper.forEach(el=>{
            let scrollOffset = el.offsetTop + el.offsetHeight /10;
            if (windowCenter >= scrollOffset){
                el.classList.add('wrap_animation');
            }else { 
                el.classList.remove ('wrap_animation');
            }
        })
    }


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
scrollwraps();
window.addEventListener('scroll', () => {
    headerFixed();
    scrollwraps();
});
})


