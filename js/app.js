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
const servicesContainer = document.querySelector('.services-container')

// hover trigger
services.addEventListener('mouseenter', () => {
  servicesContainer.classList.add('show');
})

services.addEventListener('mouseleave', () => {
  servicesContainer.classList.remove('show');
})



