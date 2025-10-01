const mySiema = new Siema({
  perPage: {
    768: 2,
    1024: 3
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



