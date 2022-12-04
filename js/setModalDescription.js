import {getData} from './getData.js';
import {API_URL, PREFIX_PRODUCT} from './const.js';
import {
	modalProduct,
	modalTitle,
	modalDescription,
	modalImage,
	modalCalories,
	modalIngredients,
	modalPrice,
	modalProductBtn
} from './elements.js';

export const setModalDescription = async (id) => {
	const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)

	modalTitle.textContent = product.title;
	modalImage.src = `${API_URL}/${product.image}`
	console.log(`${API_URL}/${product.image}`);
	const ingredientList = product.ingredients.map(item => {
		const li = document.createElement('li');
		li.classList.add('ingredients__item');
		li.textContent = item
		return li
	});

	modalIngredients.textContent = '';
	modalIngredients.append(...ingredientList);

	modalDescription.textContent = product.description;
	modalCalories.textContent = `${product.weight}г, ккал${product.calories}`;
	modalPrice.textContent = product.price;
	modalProductBtn.dataset.productId = product.id
	modalProduct.classList.add('modal_open');
}