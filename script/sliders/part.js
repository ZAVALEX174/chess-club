// const partArray = [
// 	{
// 		img: 'master.png',
// 		name: 'Хосе-Рауль Капабланка',
// 		level: 'Чемпион мира по шахматам',
// 		linkText: 'Подробнее'
// 	},
// 	{
// 		img: 'master.png',
// 		name: 'Эммануил Ласкер',
// 		level: 'Чемпион мира по шахматам',
// 		linkText: 'Подробнее'
// 	},
// 	{
// 		img: 'master.png',
// 		name: 'Александр Алехин',
// 		level: 'Чемпион мира по шахматам',
// 		linkText: 'Подробнее'
// 	},
// 	{
// 		img: 'master.png',
// 		name: 'Арон Нимцович',
// 		level: 'Чемпион мира по шахматам',
// 		linkText: 'Подробнее'
// 	},
// 	{
// 		img: 'master.png',
// 		name: 'Рихард Рети',
// 		level: 'Чемпион мира по шахматам',
// 		linkText: 'Подробнее'
// 	},
// 	{
// 		img: 'master.png',
// 		name: 'Остап Бендер',
// 		level: 'Гроссмейстер',
// 		linkText: 'Подробнее'
// 	},
// ];

// let activSlide = 0;
// let flag = true;

// let showSlide = 1;

// const nextBtn = document.querySelector('.participants__slider-button-next');
// const prevBtn = document.querySelector('.participants__slider-button-prev');

// const sliderPlase = document.querySelector('.participants__slider-box');

// const createAllSlideLengthPagination = () => {

// 	 if(window.innerWidth >= 1180) {
//     showSlide = 3;
//   }
//  if(window.innerWidth >= 768 && window.innerWidth < 1180) {
//     showSlide = 2;
//   }
//  if(window.innerWidth < 768) {
//     showSlide = 1;
//   }
	
//   const paginationBox = document.querySelector('.participants__slider-pagination');
//   let allSlide = document.createElement('span');
//   allSlide.classList.add('participants__slider-pagination-right');
//   allSlide.textContent = ` / ${partArray.length}`;
  
//   let showActiveSlid = document.createElement('span');
//   showActiveSlid.classList.add('participants__slider-pagination-left');
// 	showActiveSlid.textContent = `${showSlide} `;
  
//   paginationBox.append(showActiveSlid, allSlide);
// }

// const showActiveSlide = (i) => {
// let activeSlideNumder = document.querySelector('.participants__slider-pagination-left');
// activeSlideNumder.textContent = i;
// }

// const createSlide = (slide, pos) => {
// 	const ad = 'append'

// 	const item = document.createElement('div');
// 	item.classList.add('participants__slid');

// 	const imgBox = document.createElement('div');
// 	imgBox.classList.add('participants__slid-img-box');

// 	const img = document.createElement('img');
// 	img.alt = '';
// 	img.src = './images/' + partArray[slide].img;
// 	img.classList.add('participants__slid-img');

// 	const nameCard = document.createElement('h3');
// 	nameCard.textContent = partArray[slide].name;
// 	nameCard.classList.add('participants__slid-name');

// 	const cardParagrahp = document.createElement('span');
// 	cardParagrahp.classList.add('participants__slid-level');
// 	cardParagrahp.textContent = partArray[slide].level;

// 	const cardBtn = document.createElement('a');
// 	cardBtn.classList.add('participants__slid-link');
// 	cardBtn.textContent = partArray[slide].linkText;

// 	imgBox.append(img);
// 	item.append(imgBox, nameCard, cardParagrahp, cardBtn);
// 	sliderPlase.append(item);

// 	if (pos == 'append') {
// 		sliderPlase.append(item);
// 	}

// 	if (pos == 'prepend') {
// 		sliderPlase.prepend(item);
// 	}	
// }

// const nextSlideGenerate = () => {
// 	let nextSLide = activSlide + 1;
// 	const ad = 'append'

// 	if (nextSLide >= partArray.length) {
// 		nextSLide = 0;
// 	}
// 	createSlide(nextSLide, ad);
// }

// const prevSlideGenerate = () => {
// 	let prevSLide = activSlide - 1;
// 	const pr = 'prepend';

// 	if (prevSLide < 0) {
// 		prevSLide = partArray.length - 1;
// 	}
// 	createSlide(prevSLide, pr);
// }

// const nextSlide = () => {
// 	activSlide++;
// 	if (activSlide >= partArray.length) {
// 		activSlide = 0;
// 	}
// 	nextSlideGenerate();
// 	document.querySelector('.participants__slid').remove();

// 	let i = activSlide + 1;

// 	showActiveSlide(i);
// }

// const prevSlide = () => {
// 	activSlide--;
// 	if (activSlide < 0) {
// 		activSlide = partArray.length - 1;
// 	}
	
// 	prevSlideGenerate();
// 	document.querySelector('.participants__slid:last-child').remove();

// 	let i;

// 	if(activSlide == 0) {
// 		i = partArray.length;
// 	} else {
// 		i = activSlide;
// 	}

// 	showActiveSlide(i);
// }

// createSlide(activSlide);
// createAllSlideLengthPagination();
// prevSlideGenerate();
// nextSlideGenerate();

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);



    const partArray = [
      {
        img: 'master.png',
        name: 'Хосе-Рауль Капабланка',
        level: 'Чемпион мира по шахматам',
        linkText: 'Подробнее'
      },
      {
        img: 'master.png',
        name: 'Эммануил Ласкер',
        level: 'Чемпион мира по шахматам',
        linkText: 'Подробнее'
      },
      {
        img: 'master.png',
        name: 'Александр Алехин',
        level: 'Чемпион мира по шахматам',
        linkText: 'Подробнее'
      },
      {
        img: 'master.png',
        name: 'Арон Нимцович',
        level: 'Чемпион мира по шахматам',
        linkText: 'Подробнее'
      },
      {
        img: 'master.png',
        name: 'Рихард Рети',
        level: 'Чемпион мира по шахматам',
        linkText: 'Подробнее'
      },
      {
        img: 'master.png',
        name: 'Остап Бендер',
        level: 'Гроссмейстер',
        linkText: 'Подробнее'
      },
    ];

    let activSlide = 0;
    let flag = true;

    const nextBtn = document.querySelector('.participants__slider-button-next');
    const prevBtn = document.querySelector('.participants__slider-button-prev');
    const sliderPlase = document.querySelector('.participants__slider-box');
    const paginationLeft = document.querySelector('.participants__slider-pagination-left');
    const paginationRight = document.querySelector('.participants__slider-pagination-right');

    const updatePagination = () => {
      paginationLeft.textContent = activSlide + 1;
      paginationRight.textContent = ` / ${partArray.length}`;
    };

    const createSlide = (slideIndex, position) => {
      const slide = partArray[slideIndex];
      
      const item = document.createElement('div');
      item.classList.add('participants__slid');

      const imgBox = document.createElement('div');
      imgBox.classList.add('participants__slid-img-box');

      const img = document.createElement('img');
      img.alt = '';
      img.src = './images/' + slide.img;
      img.classList.add('participants__slid-img');

      const nameCard = document.createElement('h3');
      nameCard.textContent = slide.name;
      nameCard.classList.add('participants__slid-name');

      const cardParagraph = document.createElement('span');
      cardParagraph.classList.add('participants__slid-level');
      cardParagraph.textContent = slide.level;

      const cardBtn = document.createElement('a');
      cardBtn.classList.add('participants__slid-link');
      cardBtn.textContent = slide.linkText;

      imgBox.append(img);
      item.append(imgBox, nameCard, cardParagraph, cardBtn);
      
      if (position === 'append') {
        sliderPlase.append(item);
      } else if (position === 'prepend') {
        sliderPlase.prepend(item);
      } else {
        sliderPlase.append(item);
      }
    };

    const nextSlideGenerate = () => {
      let nextSlideIndex = activSlide + 1;
      if (nextSlideIndex >= partArray.length) nextSlideIndex = 0;
      createSlide(nextSlideIndex, 'append');
    };

    const prevSlideGenerate = () => {
      let prevSlideIndex = activSlide - 1;
      if (prevSlideIndex < 0) prevSlideIndex = partArray.length - 1;
      createSlide(prevSlideIndex, 'prepend');
    };

    const nextSlide = () => {
      if (!flag) return;
      flag = false;
      
      activSlide = (activSlide + 1) % partArray.length;

		let widthSlide = sliderPlase.querySelector('.participants__slid').clientWidth;			
      
      sliderPlase.style.transition = 'transform 0.5s ease';
      sliderPlase.style.transform = `translateX(-${widthSlide}px)`;
      
      setTimeout(() => {
        sliderPlase.querySelector('.participants__slid:first-child').remove();
        sliderPlase.style.transition = 'none';
        sliderPlase.style.transform = 'translateX(0)';
        
        nextSlideGenerate();
        
        updatePagination();
        
        flag = true;
      }, 300);
    };

    const prevSlide = () => {
      if (!flag) return;
      flag = false;
      
      activSlide = (activSlide - 1 + partArray.length) % partArray.length;
      
      prevSlideGenerate();

			let widthSlide = sliderPlase.querySelector('.participants__slid:last-child').clientWidth;
      
      sliderPlase.style.transition = 'none';
      sliderPlase.style.transform = `translateX(-${widthSlide}px)`;
      
      setTimeout(() => {
        sliderPlase.style.transition = 'transform 0.5s ease';
        sliderPlase.style.transform = 'translateX(0)';
        
        setTimeout(() => {
          sliderPlase.querySelector('.participants__slid:last-child').remove();

          updatePagination();
          flag = true;
        }, 500);
      }, 50);
    };

    const initSlider = () => {
      createSlide(activSlide);
      
      prevSlideGenerate();
      nextSlideGenerate();
      
      updatePagination();
      
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);			
    };

    document.addEventListener('DOMContentLoaded', initSlider);

		