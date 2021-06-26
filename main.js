// Open and close the menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Hides the menu when clicking an item
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Change the page header when scrolling
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // Scroll is greater than header height
    header.classList.add('scroll')
  } else {
    // Scroll is lower than header height
    header.classList.remove('scroll')
  }
})

// Testimonials carousel/slider (Swiper)
const swiper = new Swiper('.swiper-container', {
  // The "new" operator creates a JavaScript object
  slidesPerView: 1, // Number of slides viewed at a time
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, // The mouse wheel passes the slides
  keyboard: true // Keyboard arrows move slides
})
