let inpTel = document.getElementById('tel');
let negativeBtn = document.getElementById('negative-btn');
let positiveBtn = document.getElementById('positive-btn');

let negativeContainer = document.querySelector('.negative');
let positiveContainer = document.querySelector('.positive');

let countSlide = document.getElementById('counted__num');
let slideAllText = document.getElementById('all-slide')
let slideAll = document.querySelectorAll('.slide');

let imgRight = document.getElementById('img-rotate-right');
let imgLeft = document.getElementById('img-rotate-left');

slideAllText.innerText = slideAll.length;

window.onscroll = function () {
  imgRight.style.transform = "rotate("+window.pageYOffset/4 + "deg)";
  imgLeft.style.transform = "rotate(-"+window.pageYOffset/4 + "deg)";
}

$('.mobile-ofers').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

$('.reviews').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

$('.prise').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

$('.slider').slick({
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  prevArrow: '<button type="button" class="btn-cases cases-prev">&larr;</button>',
  nextArrow: '<button type="button" class="btn-cases cases-next">&rarr;</button>'
});

$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){ //счётчик слайдов
  countSlide.innerText = currentSlide + 1;
});

inpTel.addEventListener('focus', _ => {
  if(!/^\+\d*$/.test(inpTel.value))
    inpTel.value = '+7';
});

inpTel.addEventListener('keypress', e => {
  if(!/\d/.test(e.key))
    e.preventDefault();
});

negativeBtn.onclick = function () {
  positiveBtn.classList.remove('active-border-b-red')
  negativeBtn.classList.add('active-border-b-red');

  negativeContainer.classList.add('active-emotion');
  positiveContainer.classList.remove('active-emotion');
}

positiveBtn.onclick = function () {
  negativeBtn.classList.remove('active-border-b-red')
  positiveBtn.classList.add('active-border-b-red');

  negativeContainer.classList.remove('active-emotion');
  positiveContainer.classList.add('active-emotion');
}
