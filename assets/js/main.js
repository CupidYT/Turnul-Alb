(function ($, window, document, undefined) {
  'use strict';

    jQuery(document).ready(function($) {

        // Swipers
        const swiper = new Swiper('.swiper', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    
        });
  
        // Fixed Navigation
        var lastScrollTop = 0, delta = 15;
        jQuery(window).scroll(function(event){
            var st = jQuery(this).scrollTop();
        
            if (st >= 50) {
                jQuery('.main-header').addClass('main-header-fixed');
            } else if (st < 50) {
                jQuery('.main-header').removeClass('main-header-fixed');
            }
        
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
        
            if ((st > lastScrollTop) && (lastScrollTop>0)) {
                jQuery(".main-header").css("top","-90px");
            } else {
                jQuery(".main-header").css("top","0px");
            }
        
            lastScrollTop = st;
        });

    });

})(jQuery, window, document);


