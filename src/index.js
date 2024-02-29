var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  centeredSlides: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var typed = new Typed('#typed', {
  strings: ['EBSB, IIT Patna', 'Ek Bharat Shreshtha Bharat', ' An Indian Government-initiative'],
  typeSpeed: 50,
  backSpeed: 60,
  startDelay: 500,
  backDelay: 1000,
  showCursor: false,
  loop: true,
});

AOS.init({
  offset: 200,
  duration: 900,
  easing: 'ease',
  once: true,
});


