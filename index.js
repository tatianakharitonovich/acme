const swiper = new Swiper('.swiper', {
  slidesPerView: 1.7,
  loop: true,
  spaceBetween: 8,
  slidesOffsetAfter: 0,
  slidesOffsetBefore: 300,

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper.slideNext(0);
