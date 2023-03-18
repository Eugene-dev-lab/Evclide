const swiper = new Swiper('.hero__swiper', {

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
});

let focuse_burger = document.querySelector(".focused");

document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".nav").classList.add("active");
  focuse_burger.focus();
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".nav").classList.remove("active");
  focuse_burger.value = "";
  document.querySelector(".header-btn__open").focus()
})

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('.tabs-nav__btn--active') });
    e.currentTarget.classList.add('.tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass:	'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,
  openOnInit: [0],
    collapse: false
});
})

let input = document.querySelector(".form__input-1");

document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
  input.focus();
})

document.querySelector(".header__close__search").addEventListener("click", function() {
  document.querySelector(".form").classList.remove("form__active");
  document.querySelector(".form-btn__open").classList.remove("active");
  input.value = "";
  document.querySelector(".form-btn__open").focus()
})


