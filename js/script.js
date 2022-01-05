
$(document).ready(function () {
    


    //анмация при нажании 
    $('.nav_search_text').click(function () {
        $('.popup_search').toggleClass('visible');//поиск
    })

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
    const scrollENT_img = document.querySelectorAll ('.img1');
    const scrollENT_text = document.querySelectorAll ('.ENT_text');
    const scrollcontent_wrap_2 = document.querySelectorAll ('.content_wrap-2');


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



    const scrollImgENT = () =>{
        let windowCenter = (window.innerHeight /2) + window.scrollY;
        scrollENT_img.forEach(el=>{
            let scrollOffset1 = el.offsetTop + el.offsetHeight*1.4;
            if (windowCenter >= scrollOffset1){
                el.classList.add('wrap_animation_2');
            }else { 
                el.classList.remove ('wrap_animation_2');
            }
        })
    }



    const scrollENT_text_ = () =>{
        let windowCenter = (window.innerHeight /2) + window.scrollY;
        scrollENT_text.forEach(el=>{
            let scrollOffset = el.offsetTop + el.offsetHeight*1.4;
            if (windowCenter >= scrollOffset){
                el.classList.add('wrap_animation_3');
            }else { 
                el.classList.remove ('wrap_animation_3');
            }
        })
    }



    const scrollBromo = () =>{
        let windowCenter = (window.innerHeight /2) + window.scrollY;
        scrollcontent_wrap_2.forEach(el=>{
            let scrollOffset = el.offsetTop + el.offsetHeight /100;
            if (windowCenter >= scrollOffset){
                el.classList.add('wrap_animation_4');
            }else { 
                el.classList.remove('wrap_animation_4');
            }
        })
    }
    





headerFixed();
scrollwraps();
scrollImgENT();
scrollENT_text_();
scrollBromo();

window.addEventListener('scroll', () => {
    headerFixed();
    scrollwraps();
    scrollImgENT();
    scrollENT_text_();
    scrollBromo();
});
})


