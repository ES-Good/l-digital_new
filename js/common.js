let inpTel = document.getElementById('tel');
let negativeBtn = document.getElementById('negative-btn');
let positiveBtn = document.getElementById('positive-btn');

let negativeContainer = document.querySelector('.negative');
let positiveContainer = document.querySelector('.positive');


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
