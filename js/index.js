/* Слайдер портфолио */
const swiper = new Swiper(".portfolio__slider", {
  navigation: {
    nextEl: ".portfolio__arrow_right",
    prevEl: ".portfolio__arrow_left",
    disabledClass: "portfolio__arrow_disable",
  },
  breakpoints: {
    480: {
      grid: {
        fill: "row",
        rows: 2,
      },
    },
    768: {
      slidesPerView: 2,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
  },
});

/* Бургер меню */
$(".header__contacts-burger").click(() => {
  $(".header__contacts").slideToggle();
});

/* Модальное окно */
$(".present__order-btn").click(() => {
  $(".page__overlay_modal").fadeIn(400).css("display", "flex");
});

$(".modal__close").click(() => {
  $(".page__overlay_modal").fadeOut(400);
});
