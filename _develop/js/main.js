'use strict';

const
    sliderFront = document.getElementById('sliderFront'),
    objectsTab = document.getElementById('objectsTab'),
    sectionMaterials = document.getElementById('sectionMaterials'),
    sectionMaterialsAll = document.getElementById('sectionMaterialsAll'),
    wrapperSingle = document.querySelector('.wrapper-single')
;

const
    wrapper = document.querySelector('.wrapper'),
    headerMob = document.querySelector('.header'),
    headerTop = document.querySelector('.header__top'),
    headerTopMobile = document.querySelector('.header__top_mobile'),
    headerBottom = document.querySelector('.header__bottom'),
    headerTopPart = document.querySelector('.header__top_part'),
    headerTopAdress = document.querySelector('.header__top_adress'),
    headerTopPartRight = document.querySelector('.header__top_part--right'),
    headerTopAdressMobile = document.querySelector('.header__top_adress--mobile-right'),
    wrapperMain = document.getElementById('wrapperMain')
;

function wrapperMob() {
    wrapper.classList = 'wrapper wrapper--mobile';
    headerMob.classList = 'header header--mobile';
    headerMob.removeChild(headerTop);
    headerMob.removeChild(headerBottom);
}

function wrapperDesk() {
    // headerTopPart.removeChild(headerTopAdressMobile);
    headerMob.removeChild(headerTopMobile);
}

function initMain() {
    wrapperDesk();
}

function initMainMobile() {
    wrapperMob();
}

if (document.body.clientWidth > 820 || screen.width > 820) {
    initMain();
} else {
    initMainMobile();
}