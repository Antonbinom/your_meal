import {catalogTitle, navigationList, navigationListItems} from "./elements.js";

export const navigationListController = (cb) => {
	navigationList.addEventListener('click', ({target}) => {
		const categoryItem = target.closest('.navigation__button');

		if (!categoryItem) return;

		navigationListItems.forEach(item => {
			if (item === categoryItem) {
				item.classList.add('navigation__button_active');
				catalogTitle.textContent = categoryItem.textContent
				cb(item.dataset.category)
			} else {
				item.classList.remove('navigation__button_active');
			}
		})
	})
};