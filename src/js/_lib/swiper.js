

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const mySwiper = new Swiper('.swiper-container-main', {
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: false,
    freeMode: false,
    speed: 500,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.main__slider-btn--next',
      prevEl: '.main__slider-btn--prev',
    },
  });
};
