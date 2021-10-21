$(document).ready(function(){});

window.onload = function(){
    new Swiper('.sw-main', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 1000,
        navigation: {
            prevEl: '.sw-main-prev',
            nextEl: '.sw-main-next',
        },
    });


};