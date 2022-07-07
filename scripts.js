ScrollReveal().reveal('.scrollReveal',{ duration: 1500, reset: true, distance: '120px' } );

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  