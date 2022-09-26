window.onload = function () {
    let preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
}

const btn = document.querySelector('.burger__menu');

const menu = document.querySelector('.menu');

btn.addEventListener('click', () =>{
    menu.classList.toggle('menu--active');
})






$(document).ready(function(){
    $('.contacts__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    })
});

$(document).ready(function(){
    $('.rest__item-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    })
});

$(document).ready(function(){
    $('.stock__slider').slick({
        infinite: true,
        slidesToShow: 2,
         slidesToScroll: 2,
        // dots: true
        responsive: [
            {
              breakpoint: 1143,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    })
});

$(document).ready(function(){
    $('.anons__slider').slick({
        infinite: true,
        slidesToShow: 4,
         slidesToScroll: 1,
        // dots: true
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                
              }
            },
            {
                breakpoint: 650,
                settings: {
                  slidesToShow: 2,
                  
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    })
});

const stockBtn = document.querySelectorAll('.stock__item-btn');

const stockText = document.querySelectorAll('.stock__item-text');

stockBtn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        e.target.closest('.stock__item').querySelector('.stock__item-text').classList.toggle('stock__item-text--active')
    })
})


const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close__btn');
const bookingBtn = document.querySelector('.bron__stol');

bookingBtn.addEventListener('click', () =>{
    modal.classList.add('modal--active')
})

closeBtn.addEventListener('click', () =>{
    modal.classList.remove('modal--active')
})
