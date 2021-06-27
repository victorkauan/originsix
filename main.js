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

// Change the page header when scroll
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // Scroll is greater than header height
    header.classList.add('scroll')
  } else {
    // Scroll is lower than header height
    header.classList.remove('scroll')
  }
}

// Testimonials carousel/slider (Swiper)
const swiper = new Swiper('.swiper-container', {
  // The "new" operator creates a JavaScript object
  slidesPerView: 1, // Number of slides viewed at a time
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, // The mouse wheel passes the slides
  keyboard: true, // Keyboard arrows move slides
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true // Sets the wrapper size to fixed, thus always showing the defined amount of slides
    }
  }
})

// Show elements as they are viewed (ScrollReveal)
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700, // Animation duration in milliseconds
  reset: true // Reset the elements already loaded, thus always showing the animation again
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  {
    interval: 100
  }
)

// Back to top
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })
}

// When scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
