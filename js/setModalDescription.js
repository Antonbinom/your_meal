import {
	modalProduct,
	modalTitle,
	modalDescription,
	modalImage,
	modalCalories,
	modalIngredients,
	modalPrice
} from './elements.js';

export const setModalDescription = (product) => {
	const ingredientList = product.ingredients.map(item => {
		const li = document.createElement('li');
		li.classList.add('ingredients__item');
		li.textContent = item
		return li
	});

	modalIngredients.textContent = '';
	modalIngredients.append(...ingredientList);
	modalTitle.textContent = product.title;
	modalImage.src = product.image
	modalDescription.textContent = product.description;
	modalCalories.textContent = `${product.weight}г, ккал${product.calories}`;
	modalPrice.textContent = product.price;

	modalProduct.classList.add('modal_open');
}