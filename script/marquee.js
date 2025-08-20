function initMarquee(container) {
  const track = container.querySelector('.marquee__track');
  const inner = track.querySelector('.marquee__inner');
  const speed = parseInt(container.getAttribute('data-speed')) || 50;
  const direction = container.getAttribute('data-direction') || 'left';

  if (!inner.dataset.cloned) {
    const originalCards = Array.from(inner.children);
    let totalWidth = inner.scrollWidth;
    const containerWidth = container.offsetWidth;

    while (totalWidth < containerWidth * 5) {
      originalCards.forEach((card) => {
        inner.appendChild(card.cloneNode(true));
      });
      totalWidth = inner.scrollWidth;
    }

    inner.dataset.cloned = 'true';
  }

  const updateAnimation = () => {
    const totalWidth = inner.scrollWidth / 2;
    const duration = totalWidth / speed;

    inner.style.animationName = direction === 'right' ? 'scroll-right' : 'scroll-left';
    inner.style.animationDuration = `${duration}s`;
  };

  updateAnimation();
  window.addEventListener('resize', updateAnimation);
}

window.onload = () => {
  document.querySelectorAll('.marquee__container').forEach(initMarquee);
};