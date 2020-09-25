let inpTel = document.getElementById('tel');

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

inpTel.addEventListener('focus', _ => {
  if(!/^\+\d*$/.test(inpTel.value))
    inpTel.value = '+7';
});

inpTel.addEventListener('keypress', e => {
  if(!/\d/.test(e.key))
    e.preventDefault();
});

ymaps.ready(init);

var myMap,
    bigMap = false;

function init () {
    myMap = new ymaps.Map('map', {
        center: [55.755768, 37.617671],
        zoom: 10
    }, {
        // При сложных перестроениях можно выставить автоматическое
        // обновление карты при изменении размеров контейнера.
        // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
        // autoFitToViewport: 'always'
        searchControlProvider: 'yandex#search'
    });
    $('#toggler').click(toggle);
}

function toggle () {
    bigMap = !bigMap;

    // Добавляем/убираем CSS-класс, определяющий размеры контейнера карты,
    // заданные в абсолютных единицах (300x200 px).
    if (bigMap) {
        $('#map').removeClass('smallMap');
    } else {
        $('#map').addClass('smallMap');
    }

    // Если выставлен флаг, сообщаем карте, что ей следует
    // привести свои размеры к размерам контейнера.
    if ($('#checkbox').prop('checked')) {
        myMap.container.fitToViewport();
    }
}