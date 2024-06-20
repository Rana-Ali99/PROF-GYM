var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "1",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    }
  }
});

//////////////////////////////////////////////////////////////////////
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});
ScrollReveal().reveal('.content ', { delay: 200 , origin : 'left'});
ScrollReveal().reveal('.social , .list-inline , .copyright , .footer-logo', { delay: 400 , origin : 'bottom' , interval : 100});
ScrollReveal().reveal('.section-header ', { delay: 100 , origin : 'top'});