
$(document).ready(function(){ 
            $('.nav_search_text').click(function(){
            $('.popup_search').toggleClass('visible');
        });



        
        $(window).scroll(function(){
            var st = $(this).scrollTop();
            $('.intro_content').css({
                "transform" : "translate(0%, -" + st/8 + "%"
            });
        });


        $('.red_more').click(function(){
            $('.content_wrap-2').css('background-image', 'url(/img/bromo_2.jpg)');
        });
})


