$('.header__slick').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true
});





const link1 = document.getElementById('myLink');
const link2 = document.getElementById('myLink2');
const overlay = document.getElementById('overlay');
const banner1 = document.getElementById('banner');
const banner2 = document.getElementById('banner2');
const closeBanner1 = document.getElementById('closeBanner');
const closeBanner2 = document.getElementById('closeBanner2');

link1.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.display = 'block';
    banner1.style.display = 'block';
});

link2.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.display = 'block';
    banner2.style.display = 'block';
});

closeBanner1.addEventListener('click', function () {
    overlay.style.display = 'none';
    banner1.style.display = 'none';
});

closeBanner2.addEventListener('click', function () {
    overlay.style.display = 'none';
    banner2.style.display = 'none';
});


$(document).ready(function () {
    // По умолчанию активен первый блок
    $('.services__conditioning').addClass('active');
    $('#block1').addClass('active');

    // Обработчик клика по блоку 1
    $('.services__conditioning').click(function (e) {
        e.preventDefault();
        $('#block1').addClass('active');
        $('#block2').removeClass('active');
    });

    // Обработчик клика по блоку 2
    $('.services__ventilation-systems').click(function (e) {
        e.preventDefault();
        $('#block1').removeClass('active');
        $('#block2').addClass('active');
    });
});
