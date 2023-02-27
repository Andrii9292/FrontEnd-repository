$('.header__slick').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true
});



const link = document.getElementById('myLink');
const overlay = document.getElementById('overlay');
const banner = document.getElementById('banner');
const closeBanner = document.getElementById('closeBanner');

link.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.display = 'block';
    banner.style.display = 'block';
});

closeBanner.addEventListener('click', function () {
    overlay.style.display = 'none';
    banner.style.display = 'none';
});
