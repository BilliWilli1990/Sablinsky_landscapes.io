const timeTitle = document.getElementById('timeTitle');
let dateX = new Date().toLocaleDateString();
let myVar = setTimeout(function tick() {
  myVar = setTimeout(tick, 1000);
  let dateY = new Date();
  timeTitle.innerHTML = dateY.toLocaleTimeString();
}, 1000);
const cnfg2 = {
  images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg',
    'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg',
    'images/10.jpg', 'images/11.jpg', 'images/12.jpg', 'images/13.jpg']
};
const slider2 = new Slider2(document.getElementById('slider2'), cnfg2);
const prev = document.getElementById('prev');
const nex = document.getElementById('nex');
prev.addEventListener('click', () => {
  slider2.goPrevious();
});
nex.addEventListener('click', () => {
  slider2.goNext();
});
imgDefault('.slider-panel');
const swiper = new Swiper('.mySwiper', {
  loop: true,
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});
imgDefault('.swiper-wrapper');
const swiper2 = new Swiper('.swipers', {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});
imgDefault('.swipers');
function imgDefault(el, imgSet) {
  imgSet = document.querySelector(el);
  imgSet.addEventListener('contextmenu', (evt) => {
    evt.preventDefault();
  });
}

