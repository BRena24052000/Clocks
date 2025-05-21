var swiper = new Swiper(".mySwiper", {

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1000: {
          slidesPerView: 4,
          spaceBetween: 30,
      }
    }

  });


// анимации

window.onload = function() {
  document.querySelector('.text').classList.add('visible');
};

// скролл

document.querySelectorAll('.header__link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, 
        behavior: 'smooth'
      });
    }
  });
});