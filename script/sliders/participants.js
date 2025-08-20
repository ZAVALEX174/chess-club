const cardList = [
  'master.png',
  'master.png',
  'master.png',
  'master.png',
  'master.png',
  'master.png',
  'master.png',
];

const cardListName = [
  'Хосе-Рауль Капабланка',
  'Эммануил Ласкер',
  'Александр Алехин',
  'Арон Нимцович',
  'Рихард Рети',
  'Остап Бендер',
  'Остап Бендер',
];

const cardListPar = [
  'Чемпион мира по шахматам',
  'Чемпион мира по шахматам',
  'Чемпион мира по шахматам',
  'Чемпион мира по шахматам',
  'Чемпион мира по шахматам',
  'Гроссмейстер',
  'Гроссмейстер',
];

const cardListBtn = [
  'Подробнее',
  'Подробнее',
  'Подробнее',
  'Подробнее',
  'Подробнее',
  'Подробнее',
  'Подробнее',
];

let activCard = 0;
let activCardName = 0;
let activCardPar = 0;
let activCardBtn = 0;

const sliderPlase = document.querySelector('.participants__slider-box');
const prevSlideWidth = document.querySelector('.participants__slider-box').clientWidth;
const widthOffset = document.querySelector(
  '.participants__slider'
).clientWidth;

let flag = true;

let showSlide = 0;
 
 if(window.innerWidth >= 1180) {
    showSlide = 3;
  }
 if(window.innerWidth >= 768 && window.innerWidth < 1180) {
    showSlide = 2;
  }
 if(window.innerWidth < 768) {
    showSlide = 1;
  }

const createAllSlideLengthPagination = () => {
  const paginationBox = document.querySelector('.participants__slider-pagination');
  let allSlide = document.createElement('span');
  allSlide.classList.add('participants__slider-pagination-right');
  allSlide.textContent = ` / ${cardListName.length}`;
  
  let showActiveSlid = document.createElement('span');
  showActiveSlid.classList.add('participants__slider-pagination-left');
  showActiveSlid.textContent = `${showSlide}`;

  paginationBox.append(showActiveSlid, allSlide);
}

const createSliderCards = () => {
  const item = document.createElement('div');
  item.classList.add('participants__slid');

  const imgBox = document.createElement('div');
  imgBox.classList.add('participants__slid-img-box');

  const img = document.createElement('img');
  img.alt = '';
  img.src = '../images/' + cardList[activCard];
  img.classList.add('participants__slid-img');

  const nameCard = document.createElement('h3');
  nameCard.textContent = cardListName[activCardName];
  nameCard.classList.add('participants__slid-name');

  const cardParagrahp = document.createElement('span');
  cardParagrahp.classList.add('participants__slid-level');
  cardParagrahp.textContent = cardListPar[activCardPar];

  const cardBtn = document.createElement('a');
  cardBtn.classList.add('participants__slid-link');
  cardBtn.textContent = cardListBtn[activCardBtn];

  imgBox.append(img);
  item.append(imgBox, nameCard, cardParagrahp, cardBtn);

  sliderPlase.append(item);

  createAllSlideLengthPagination();
  prevCardGenerate();
  nextCardGenerate();   
};

const nextCardGenerate = () => {
  let nextCard = activCard + 1;
  let nextCardName = activCardName + 1;
  let nextCardPar = activCardPar + 1;
  let nextCardBtn = activCardBtn + 1;

  if (nextCard >= cardList.length) nextCard = 0;
  if (nextCardName >= cardListName.length) nextCardName = 0;
  if (nextCardPar >= cardListPar.length) nextCardPar = 0;
  if (nextCardBtn >= cardListBtn.length) nextCardBtn = 0;

  const item = document.createElement('div');
  item.classList.add('participants__slid');

  const imgBox = document.createElement('div');
  imgBox.classList.add('participants__slid-img-box');

  const img = document.createElement('img');
  img.alt = '';
  img.src = '../images/' + cardList[nextCard];
  img.classList.add('participants__slid-img');

  const nameCard = document.createElement('h3');
  nameCard.textContent = cardListName[nextCardName];
  nameCard.classList.add('participants__slid-name');

  const cardParagrahp = document.createElement('span');
  cardParagrahp.classList.add('participants__slid-level');
  cardParagrahp.textContent = cardListPar[nextCardPar];

  const cardBtn = document.createElement('a');
  cardBtn.classList.add('participants__slid-link');
  cardBtn.textContent = cardListBtn[nextCardBtn];

  imgBox.append(img);
  item.append(imgBox, nameCard, cardParagrahp, cardBtn);

  sliderPlase.append(item); 

  let showNumberSlide = document.querySelector('.participants__slider-pagination-left');
  let countSlide = showSlide + (nextCard - 1);
  console.log('countSlide = showSlide + (nextCard - 1)', countSlide);
  

  if(nextCard == 0) {
    countSlide = cardList.length;
    console.log('(nextCard == 0)', countSlide);    
  }  
   
  if(countSlide >= cardList.length && countSlide >= cardList.length + 1) {
    showNumberSlide.textContent = cardList.length;
    console.log('это я даю 8');       
    console.log('cardList.length', cardList.length);       
  } else {
    showNumberSlide.textContent = countSlide;    
  }

  // if(countSlide >= cardList.length + 1) {
  //   showNumberSlide.textContent = showSlide;
  //   console.log('hfg');    
  // }
};

const prevCardGenerate = (w = false) => {
  let prevCard = activCard - 1;
  let prevCardName = activCardName - 1;
  let prevCardPar = activCardPar - 1;
  let prevCardBtn = activCardBtn - 1;

  if (prevCard < 0) prevCard = cardList.length - 1;
  if (prevCardName < 0) prevCardName = cardListName.length - 1;
  if (prevCardPar < 0) prevCardPar = cardListPar.length - 1;
  if (prevCardBtn < 0) prevCardBtn = cardListBtn.length - 1;

  const item = document.createElement('div');
  item.classList.add('participants__slid');

   const imgBox = document.createElement('div');
  imgBox.classList.add('participants__slid-img-box');

  const img = document.createElement('img');
  img.alt = '';
  img.src = '../images/' + cardList[prevCard];
  img.classList.add('participants__slid-img');

  const nameCard = document.createElement('h3');
  nameCard.textContent = cardListName[prevCardName];
  nameCard.classList.add('participants__slid-name');

  const cardParagrahp = document.createElement('span');
  cardParagrahp.classList.add('participants__slid-level');
  cardParagrahp.textContent = cardListPar[prevCardPar];

  const cardBtn = document.createElement('a');
  cardBtn.classList.add('participants__slid-link');
  cardBtn.textContent = cardListBtn[prevCardBtn];

 imgBox.append(img);
  item.append(imgBox, nameCard, cardParagrahp, cardBtn);
  if (w) item.style.width = 0;

  sliderPlase.prepend(item);  

  let showNumberSlide = document.querySelector('.participants__slider-pagination-left');
  let countSlide = prevCard + 2;

  if(countSlide > cardList.length) {
    countSlide = activCard + 1;    
  }

  showNumberSlide.textContent = countSlide;    
};

const nextCard = () => {
  if (!flag) return;
  flag = !flag;
  activCard++;
  activCardName++;
  activCardPar++;
  activCardBtn++;
  if (activCard >= cardList.length) activCard = 0;
  if (activCardName >= cardListName.length) {
    activCardName = 0;
  }
  if (activCardPar >= cardListPar.length) activCardPar = 0;
  if (activCardBtn >= cardListBtn.length) activCardBtn = 0;

  nextCardGenerate();
  animate({
    duration: 200,
    draw: function (progress) {
      document.querySelector('.participants__slid').style.width =
        widthOffset * (1 - progress) + 'px';
    },
    removeElement: document.querySelector('.participants__slid'),
  });
};

const prevCard = () => {
  if (!flag) return;
  flag = !flag;
  activCard--;
  activCardName--;
  activCardPar--;
  activCardBtn--;
  if (activCard < 0) activCard = cardList.length - 1;
  if (activCardName < 0) activCardName = cardListName.length - 1;
  if (activCardPar < 0) activCardPar = cardListPar.length - 1;
  if (activCardBtn < 0) activCardBtn = cardListBtn.length - 1;

  prevCardGenerate(true);
  animate({
    duration: 200,
    draw: function (progress) {
      document.querySelector('.participants__slid').style.width =
        widthOffset * progress + 'px';
    },
    removeElement: document.querySelector('.participants__slid:last-child'),
  });
};

const nextBtn = document
  .querySelector('.participants__slider-button-next')
  .addEventListener('click', nextCard);
const prevBtn = document
  .querySelector('.participants__slider-button-prev')
  .addEventListener('click', prevCard);

createSliderCards();

const animate = ({ duration, draw, removeElement }) => {
  const start = performance.now();

  requestAnimationFrame(function animate(time) {
    let step = (time - start) / duration;
    if (step > 1) step = 1;
    draw(step);
    if (step < 1) {
      requestAnimationFrame(animate);
    } else {
      removeElement.remove();
      flag = true;
    }
  });
};

// setInterval(nextCard, 4000);
