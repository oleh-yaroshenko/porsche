const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY == 0) {
    header.classList.remove('scrolled');
  } else {
    header.classList.add('scrolled');
  }
});

const modal = document.querySelector('.modal');
const modalShow = document.querySelectorAll('.modal-show');
const modalHide = document.querySelector('.modal-form-close');

modalShow.forEach(el => el.addEventListener("click", function () {
  modal.classList.add('modal-visible');
}))

modalHide.addEventListener("click", function () {
  modal.classList.remove('modal-visible');
})

const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

elements.forEach(el => observer.observe(el));

const menu = document.querySelector('.header-menu');
const menuShow = document.querySelector('.header-burger');
const menuBurger = document.querySelector('.header-burger-wrapper');

menuShow.addEventListener("click", function () {
  menu.classList.toggle("show")
  menuBurger.classList.toggle("active")
})

const dropdown1 = document.querySelector('.dropdown1');
const dropdownContent1 = document.querySelector('.dropdown-content1');

dropdown1.addEventListener("click", function () {
  dropdownContent1.classList.add("selected");
  dropdown1.classList.add("active")
})

const dropdown2 = document.querySelector('.dropdown2');
const dropdownContent2 = document.querySelector('.dropdown-content2');

dropdown2.addEventListener("click", function () {
  dropdownContent2.classList.add("selected");
  dropdown2.classList.add("active")
  dropdownContent1.classList.remove("selected")
  dropdown1.classList.remove("active")
})

dropdown1.addEventListener("click", function () {
  dropdownContent2.classList.remove("selected");
  dropdown2.classList.remove("active")
})