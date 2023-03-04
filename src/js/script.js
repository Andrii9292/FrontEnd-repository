$('.header__slick').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true
});

// обработчик события "mouseenter" - остановить автоматическое переключение при наведении мыши на слайдер
$('.header__slick').on('mouseenter', function () {
    $(this).slick('slickPause');
});

// обработчик события "mouseleave" - возобновить автоматическое переключение при убирании мыши с слайдера
$('.header__slick').on('mouseleave', function () {
    $(this).slick('slickPlay');
});

// обработчик события "touchstart" - остановить автоматическое переключение при касании экрана
$('.header__slick').on('touchstart', function () {
    $(this).slick('slickPause');
});

// обработчик события "touchend" - возобновить автоматическое переключение при отпускании экрана
$('.header__slick').on('touchend', function () {
    $(this).slick('slickPlay');
});

//--------------------------------------------------------
$(document).ready(function () {
    $('.portfolio__card-wrapper').slick({
        infinite: true,
        slidesToShow: 4, // количество показываемых слайдов
        slidesToScroll: 1,
        swipe: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/next.svg"></button>',
        appendArrows: $('.portfolio__card-wrapper'), // контейнер для кнопок


        responsive: [
            {
                breakpoint: 768, // настройки для экранов шириной 768px и меньше
                settings: {
                    slidesToShow: 1 // показывать только по одному слайду
                }
            }
        ]
    });

    // Удаление стрелок переключения из первого слайдера
    $('.header__slick .slick-arrow').remove();
});
//--------------------------------------------------------
$(document).ready(function () {
    $('.clients__card-wrapper').slick({
        infinite: true,
        slidesToShow: 2, // количество показываемых слайдов
        slidesToScroll: 1,
        swipe: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/next.svg"></button>',
        appendArrows: $('.clients__arrows'), // контейнер для кнопок

        responsive: [
            {
                breakpoint: 768, // настройки для экранов шириной 768px и меньше
                settings: {
                    slidesToShow: 1 // показывать только по одному слайду
                }
            },
            {
                breakpoint: 480, // настройки для экранов шириной 480px и меньше
                settings: {
                    slidesToShow: 1 // показывать только по одному слайду
                }
            },
            {
                breakpoint: 425, // настройки для экранов шириной 480px и меньше
                settings: {
                    slidesToShow: 1 // показывать только по одному слайду
                }
            }
        ]
    });
});


//----------------------------------------------------------


const link1 = document.getElementById('myLink');
const link2 = document.getElementById('myLink2');
const link2Clone = link2.cloneNode(true); // клонирование ссылки myLink2


const spanElement = link2Clone.querySelector('span'); // получение элемента span в склонированной ссылке
spanElement.textContent = 'ЗАПОЛНИТЬ ЗАЯВКУ'; // изменение текста внутри тега span
// добавление обработчика событий на склонированную ссылку
link2Clone.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.display = 'block';
    banner2.style.display = 'block';
});

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

// добавление склонированной ссылки в DOM
document.body.appendChild(link2Clone);


const myBlock = document.getElementById('myBlock');
myBlock.appendChild(link2Clone);


// получаем элементы, которые необходимо скрыть/показать
const body = document.querySelector('body');
const html = document.querySelector('html');


//............ЗАПРЕЩАЕМ СКРОЛЛ СТРАНИЦЫ ПРИ ОТКРЫТОМ БАННЕРЕ..........
link1.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.display = 'block';
    banner1.style.display = 'block';

    // запрещаем скролл страницы
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
});

link2.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.display = 'block';
    banner2.style.display = 'block';

    // запрещаем скролл страницы
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
});

link2Clone.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.display = 'block';
    banner2.style.display = 'block';

    // запрещаем скролл страницы
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
});

closeBanner1.addEventListener('click', function () {
    overlay.style.display = 'none';
    banner1.style.display = 'none';

    // возвращаем скролл страницы
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
});

closeBanner2.addEventListener('click', function () {
    overlay.style.display = 'none';
    banner2.style.display = 'none';

    // возвращаем скролл страницы
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
});

//------------------------------------------------//

//..............ПЕРЕКЛЮЧАТЕЛЬ БЛОКОВ..............
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


//----------СДЕЛАТЬ ЛИПКИЙ ХЕДЕР-----------------------------------
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header__wrapper');
    header.classList.toggle('sticky', window.scrollY > 85);
});


//----------------------------------------------------------
// Получаем ссылки на элементы
const menuLink = document.getElementById('menu');
const closeLink = document.getElementById('close');
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header__button-top');
const bodyy = document.querySelector('body');

// Обработчик события для открытия меню
menuLink.addEventListener('click', function() {
    nav.classList.add('active');
    closeLink.classList.add('active');
    header.classList.add('active');
    bodyy.classList.add('noscroll');
});

// Обработчик события для закрытия меню
closeLink.addEventListener('click', function() {
    nav.classList.remove('active');
    closeLink.classList.remove('active');
    header.classList.remove('active');
    bodyy.classList.remove('noscroll');
});

// Обработчик события для закрытия меню при нажатии на "крестик"
closeLink.addEventListener('click', function(event) {
    event.preventDefault();
    nav.classList.remove('active');
    bodyy.classList.remove('noscroll');
});


