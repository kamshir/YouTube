const channel = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  autoplay: true,
  speed: 500,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const recommended = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  autoplay: true,
  speed: 300,

  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

});

const food = new Swiper('.food-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  autoplay: true,
  speed: 450,

  // Navigation arrows
  navigation: {
    nextEl: '.food-button-next',
    prevEl: '.food-button-prev',
  },

});