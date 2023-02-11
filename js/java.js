const divPhoneMenu = document.getElementById("phoneMenu");
const bodyForNoScroll = document.body


const swiper = new Swiper('.swiper', {
  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

function menuBar(x) {
    x.classList.toggle("change");
}

function phoneMenu() {
  divPhoneMenu.classList.toggle("show");
}

