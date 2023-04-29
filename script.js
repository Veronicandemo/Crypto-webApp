'use strict'

const btnNavigation = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header')

btnNavigation.addEventListener('click', function(){
    header.classList.toggle('nav-open')
})
