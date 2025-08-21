document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.stages__list');
  const slideItems = document.querySelectorAll('.stages__item');
  const prevBtn = document.querySelector('.stages__button-prev');
  const nextBtn = document.querySelector('.stages__button-next');
  const pagination = document.querySelector('.stages__pagination');
  let currentSlide = 0;
  const slideCount = slideItems.length;

  prevBtn.classList.add('disabled');

  // Создаем пагинацию
  for (let i = 0; i < slideCount; i++) {
    const point = document.createElement('span');
    point.classList.add('stages__pagination-point');
    if (i === 0) point.classList.add('stages__pagination-point-active');
    point.addEventListener('click', () => goToSlide(i));
    pagination.appendChild(point);
  }

  const points = document.querySelectorAll('.stages__pagination-point');

  function goToSlide(index) {
    index > 0 ? prevBtn.classList.remove('disabled') : prevBtn.classList.add('disabled');
    index >= slideItems.length - 1 ? nextBtn.classList.add('disabled') : nextBtn.classList.remove('disabled');

    if (index >= slideCount) {
      currentSlide = slideItems.length - 1;
    } else if (index < 0) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    points.forEach((point, i) => {
      point.classList.toggle('stages__pagination-point-active', i === currentSlide);
    });
  }

  prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

});