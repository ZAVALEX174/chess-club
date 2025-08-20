    // Объединяем все данные в один массив объектов для лучшей структуры
    const cardsData = [
      {
        image: 'master.png',
        name: 'Хосе-Рауль Капабланка',
        description: 'Чемпион мира по шахматам',
        buttonText: 'Подробнее'
      },
      {
        image: 'master.png',
        name: 'Эммануил Ласкер',
        description: 'Чемпион мира по шахматам',
        buttonText: 'Подробнее'
      },
      {
        image: 'master.png',
        name: 'Александр Алехин',
        description: 'Чемпион мира по шахматам',
        buttonText: 'Подробнее'
      },
      {
        image: 'master.png',
        name: 'Арон Нимцович',
        description: 'Чемпион мира по шахматам',
        buttonText: 'Подробнее'
      },
      {
        image: 'master.png',
        name: 'Рихард Рети',
        description: 'Чемпион мира по шахматам',
        buttonText: 'Подробнее'
      },
      {
        image: 'master.png',
        name: 'Остап Бендер',
        description: 'Гроссмейстер',
        buttonText: 'Подробнее'
      }
    ];

    // Элементы DOM
    const sliderBox = document.querySelector('.participants__slider-box');
    const prevBtn = document.querySelector('.participants__slider-button-prev');
    const nextBtn = document.querySelector('.participants__slider-button-next');
    const paginationCurrent = document.querySelector('.participants__slider-pagination-current');
    const paginationTotal = document.querySelector('.participants__slider-pagination-total');

    // Текущее состояние
    let currentSlideIndex = 0;
    let isAnimating = false;
    
    // Устанавливаем общее количество слайдов
    paginationTotal.textContent = `/ ${cardsData.length}`;

    // Функция для создания DOM-элемента слайда
    function createSlideElement(cardData) {
      const slide = document.createElement('div');
      slide.className = 'participants__slid';

      slide.innerHTML = `
        <div class="participants__slid-img-box">
          <img src="../images/${cardData.image}" alt="${cardData.name}" class="participants__slid-img">
        </div>
        <h3 class="participants__slid-name">${cardData.name}</h3>
        <span class="participants__slid-level">${cardData.description}</span>
        <a href="#" class="participants__slid-link">${cardData.buttonText}</a>
      `;

      return slide;
    }

    // Инициализация слайдера
    function initSlider() {
      // Очищаем контейнер
      sliderBox.innerHTML = '';
      
      // Создаем и добавляем все слайды
      cardsData.forEach(cardData => {
        const slideElement = createSlideElement(cardData);
        sliderBox.appendChild(slideElement);
      });
      
      // Обновляем пагинацию
      updatePagination();
    }

    // Функция для обновления отображения текущего слайда в пагинации
    function updatePagination() {
      paginationCurrent.textContent = currentSlideIndex + 1;
    }

    // Функция для перехода к следующему слайду
    function nextSlide() {
      if (isAnimating) return;
      
      isAnimating = true;
      currentSlideIndex = (currentSlideIndex + 1) % cardsData.length;
      
      // Анимация перехода
      const slideWidth = sliderBox.children[0].offsetWidth + 30; // width + margin
      sliderBox.style.transform = `translateX(-${slideWidth}px)`;
      
      setTimeout(() => {
        sliderBox.style.transition = 'none';
        sliderBox.appendChild(sliderBox.children[0]);
        sliderBox.style.transform = 'translateX(0)';
        
        setTimeout(() => {
          sliderBox.style.transition = 'transform 0.3s ease';
          isAnimating = false;
        }, 50);
        
        updatePagination();
      }, 300);
    }

    // Функция для перехода к предыдущему слайду
    function prevSlide() {
      if (isAnimating) return;
      
      isAnimating = true;
      currentSlideIndex = (currentSlideIndex - 1 + cardsData.length) % cardsData.length;
      
      // Анимация перехода
      const slideWidth = sliderBox.children[0].offsetWidth + 30; // width + margin
      sliderBox.style.transition = 'none';
      sliderBox.prepend(sliderBox.children[cardsData.length - 1]);
      sliderBox.style.transform = `translateX(-${slideWidth}px)`;
      
      setTimeout(() => {
        sliderBox.style.transition = 'transform 0.3s ease';
        sliderBox.style.transform = 'translateX(0)';
        
        setTimeout(() => {
          isAnimating = false;
        }, 300);
        
        updatePagination();
      }, 50);
    }

    // Инициализация слайдера
    initSlider();

    // Обработчики событий
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Автоматическая прокрутка
    setInterval(nextSlide, 4000);