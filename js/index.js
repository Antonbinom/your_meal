import {
	modalProduct,
	catalogList,
} from './elements.js';

import {setModalDescription} from './setModalDescription.js'
import {renderListProduct} from './renderListProduct.js';
import {navigationListController} from './navigationListController.js';
import {cartInit} from './cart.js';

catalogList.addEventListener('click', ({target}) => {
	if (target.closest('.product__title') || target.classList.contains('product__image')) {
		const id = target.closest('.product').dataset.productId;
		setModalDescription(id)
	}
});

modalProduct.addEventListener('click', ({target}) => {
	if (target.closest('.modal__close') || target === modalProduct) {
		modalProduct.classList.remove('modal_open');
	}
});

const init = () => {
	renderListProduct();
	navigationListController(renderListProduct);
	cartInit();
};

init();