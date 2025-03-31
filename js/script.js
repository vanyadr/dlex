document.addEventListener('DOMContentLoaded', () => {
    const videoHolder = document.querySelector('.general__video-holder');
    const video = videoHolder.querySelector('video');
    const playBtn = document.querySelector('.general__play-btn');

    playBtn.addEventListener('click', () => {
        video.play();
        video.setAttribute('controls', '');
        video.setAttribute('loop', '');
        playBtn.classList.add('hide');
    });
    video.addEventListener('pause', () => {
        video.removeAttribute('controls');
        video.removeAttribute('loop');
        playBtn.classList.remove('hide');
    });

    const popupBtns = document.querySelectorAll('.open-popup');
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.popup');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const closer = document.querySelector('.popup__closer');
    const menuBtn = document.querySelector('.main-header__menu-img');
    const mobileMenu = document.querySelector('.mobile-menu');
    let scrollPosition = 0;

    popupBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('menu-active')) {
                mobileMenu.classList.toggle('menu-active');
                menuBtn.classList.toggle('menu-icon-active');
                body.classList.toggle('popup-open');
            };
            overlay.classList.add('popup-active');
            popup.classList.add('popup-active');
            scrollPosition = window.pageYOffset;
            body.classList.add('popup-open');
            body.style.top = `-${scrollPosition}px`;
            header.style.top = `${scrollPosition}px`;
        });
    });
    closer.addEventListener('click', () => {
        overlay.classList.remove('popup-active');
        popup.classList.remove('popup-active');
        body.classList.remove('popup-open');
        body.style.top = '';
        header.style.top = '';
        window.scrollTo(0, scrollPosition);
    });
    video.addEventListener('timeupdate', () => {
        const currentTime = video.currentTime;
        const duration = video.duration;
        if (currentTime >= duration / 2 && currentTime <= (duration / 2) + 0.5 && !popup.classList.contains('popup-active')) {
            overlay.classList.add('popup-active');
            popup.classList.add('popup-active');
            scrollPosition = window.pageYOffset;
            body.classList.add('popup-open');
            body.style.top = `-${scrollPosition}px`;
            header.style.top = `${scrollPosition}px`;
            video.pause();
        }
    });

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('menu-active');
        menuBtn.classList.toggle('menu-icon-active');
        body.classList.toggle('popup-open');
    });
});

$(document).ready(function () {
    $('.slider-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        prevArrow: '.slider-button-prev',
        nextArrow: '.slider-button-next',
        appendDots: $('.slider-pagination'),
        customPaging: function (slider, i) {
            return '';
        }
    });
});