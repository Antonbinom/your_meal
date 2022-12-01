import {
	modalProduct,
	catalogList,
} from './elements.js';

import {setModalDescription} from './setModalDescription.js'
import {renderListProduct} from './renderListProduct.js';
import {navigationListController} from './navigationListController.js';

const burger = {
	"id": "3184803604",
	"title": "Мясная бомба",
	"price": 689,
	"weight": 520,
	"calories": 430,
	"description": "Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.",
	"ingredients": [
		"Пшеничная булочка",
		"Котлета из говядины",
		"Красный лук",
		"Листья салата",
		"Соус горчичный"
	],
	"category": "burger",
	"image": "/img/megaburger.jpg"
};

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