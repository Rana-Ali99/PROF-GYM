let nums = document.querySelectorAll(".num");
let section = document.querySelector(".pricing");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//////////////////////////////////////////////////////////////////////////////////

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});
ScrollReveal().reveal(".main-title , .main-p ,.title , .content", {
  delay: 400,
  origin: "left",
});
ScrollReveal().reveal(".main-btn", { delay: 200, origin: "bottom" });
ScrollReveal().reveal(".who-are-you-title , .pricing-h2", {
  delay: 200,
  origin: "left",
});
ScrollReveal().reveal('.main-title , .main-p', { delay: 400 , origin : 'left'});
ScrollReveal().reveal('.who-are-you-title , .pricing-h2', { delay: 200 , origin : 'left'});
ScrollReveal().reveal('.who-are-you-desc', { delay: 300 , origin : 'bottom'});
ScrollReveal().reveal('.who-are-you-img', { delay: 300 , origin : 'right'});
ScrollReveal().reveal('.why-choose-us-title', { delay: 300 , origin : 'right'});
ScrollReveal().reveal('.why-choose-us-lottile', { delay: 100 , origin : 'left'});
ScrollReveal().reveal('.why-choose-us-desc', { delay: 500 , origin : 'bottom'});
ScrollReveal().reveal('.contact-item', { delay: 500 , origin : 'bottom'});
ScrollReveal().reveal('.social , .list-inline , .copyright , .footer-logo', { delay: 400 , origin : 'bottom' , interval : 100});
ScrollReveal().reveal('.title , .content', { delay: 100 , origin : 'left'});
