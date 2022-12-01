import {
	modalProduct,
	catalogList,
} from './elements.js';

import {setModalDescription} from './setModalDescription.js'
import {renderListProduct} from './renderListProduct.js';
import {navigationListController} from './navigationListController.js';

catalogList.addEventListener('click', (e) => {
	const target = e.target;
	if (target.closest('.product__title') || e.target.classList.contains('product__image')) {
		setModalDescription(burger)
	}
});

modalProduct.addEventListener('click', (e) => {
	const target = e.target;
	if (target.closest('.modal__close') || target === modalProduct) {
		modalProduct.classList.remove('modal_open');
	}
});

const init = () => {
	renderListProduct();
	navigationListController();
};

init();