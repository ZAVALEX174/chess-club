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

	nextSlideGenerate();

	updatePagination();

	sliderPlase.style.transition = 'transform 0.5s ease';
	sliderPlase.style.transform = `translateX(-${widthSlide}px)`;

	setTimeout(() => {
		sliderPlase.querySelector('.participants__slid:first-child').remove();
		sliderPlase.style.transition = 'none';
		sliderPlase.style.transform = 'translateX(0)';

		flag = true;
	}, 500);
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
		sliderPlase.style.transition = 'transform 0.3s ease';
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

	nextSlide();

	nextBtn.addEventListener('click', nextSlide);
	prevBtn.addEventListener('click', prevSlide);

	// Функция для автоматического пролистывания
	const startAutoSlide = () => {
		autoSlideInterval = setInterval(() => {
			nextSlide();
		}, 4000);
	};

	startAutoSlide();
};

document.addEventListener('DOMContentLoaded', initSlider);

