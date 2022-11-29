const productDetail = document.querySelector('.product__image');
const modalProduct = document.querySelector('.modal_product');
const catalogList = document.querySelector('.catalog__list');

const modalTitle = document.querySelector('.modal-product__title');
const modalDescription = document.querySelector('.modal-product__description');
const modalImage = document.querySelector('.modal-product__image');
const modalCalories = document.querySelector('.ingredients__calories');
const modalIngredients = document.querySelector('.ingredients__list');
const modalPrice = document.querySelector('.modal-product__price-count');

const burger = {
	title: 'МаксБургер',
	price: 500,
	weight: 1000,
	calories: 2000,
	description: 'Вкусный бургер',
	image: 'img/megaburger.jpg',
	ingredients: [
		'Булочка',
		'Тофу',
		'Сыр',
		'Помидор',
		'Руколла'
	]
}

const setModalDescription = () => {
	const ingredientList = burger.ingredients.map(item => {
		const li = document.createElement('li');
		li.classList.add('ingredients__item');
		li.textContent = item
		return li
	})
	modalIngredients.innerHTML = '';
	modalIngredients.append(...ingredientList);
	modalTitle.textContent = burger.title;
	modalImage.src = burger.image
	modalDescription.textContent = burger.description;
	modalCalories.textContent = `${burger.weight}г, ккал${burger.calories}`;
	modalPrice.textContent = burger.price;
}

catalogList.addEventListener('click', (e) => {
	const target = e.target;
	if (target.closest('.product__title') || e.target.classList.contains('product__image')) {
		modalProduct.classList.add('modal_open');
	}
})

modalProduct.addEventListener('click', (e) => {
	const target = e.target;
	if (target.closest('.modal__close') || target === modalProduct) {
		modalProduct.classList.remove('modal_open');
	}
})

setModalDescription()