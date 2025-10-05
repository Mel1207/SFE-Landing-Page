const mySiema = new Siema({
  perPage: {
    850: 2,
    1280: 3
  },
  onChange: updateActive,
});
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());

function updateActive() {
  const slides = document.querySelectorAll('.siema > div');
  slides.forEach(slide => slide.classList.remove('active'));

  // center index based on perPage
  const perPage = mySiema.currentPerPage || 3;
  const centerIndex = mySiema.currentSlide + Math.floor(perPage / 1);

  if (slides[centerIndex]) {
    slides[centerIndex].classList.add('active');
  }
}

updateActive();

// hover trigger
const services = document.querySelector('.has-services');
const servicesContainer = document.querySelector('.services-container');
const servicesItems = document.querySelectorAll('.service-block');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-navigation');
const collapseMobileNav = document.querySelector('.close-navigation');

// hover trigger
services.addEventListener('mouseenter', () => {
  servicesContainer.classList.add('show');
})

services.addEventListener('mouseleave', () => {
  servicesContainer.classList.remove('show');
})

// Extra: keep it open if mouse enters container
servicesContainer.addEventListener('mouseenter', () => {
  servicesContainer.classList.add('show');
});

servicesContainer.addEventListener('mouseleave', () => {
  servicesContainer.classList.remove('show', 'color-1', 'color-2', 'color-3');
});

servicesItems.forEach(service => {
  service.addEventListener("mouseenter", () => {
    servicesContainer.classList.remove('color-1', 'color-2', 'color-3');
    if(service.classList.contains('service-1')) {
      servicesContainer.classList.add('color-1')
    } else if (service.classList.contains('service-2')) {
      servicesContainer.classList.add('color-2')
    } else if (service.classList.contains('service-3')) {
      servicesContainer.classList.add('color-3')
    }
  })
})

mobileMenu.addEventListener('click', () => {
  mobileNav.classList.add('mobile-active');
})

collapseMobileNav.addEventListener('click', () => {
  mobileNav.classList.remove('mobile-active');
})



