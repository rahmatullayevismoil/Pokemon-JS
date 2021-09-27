window.onload = function () {

	// Menu

	const menuButton = document.querySelector('.main__menu')
	const menuClose = document.querySelector('.menu__close')
	const menu = document.querySelector('.menu')

	function menuToggle() {
		menu.classList.toggle('active')
		document.querySelector('html').classList.toggle('active')
		document.querySelector('body').classList.toggle('active')
	}

	menuButton.addEventListener('click', menuToggle)
	menuClose.addEventListener('click', menuToggle)


	// Type filter

	const typeInput = document.querySelector('.filter-type')
	const card = document.querySelectorAll('.main__card[data-type]')

	typeInput.addEventListener('change', function (e) {
		let typeValue = e.target.value

		for (let i = 0; i < card.length; i++) {
			const cardItem = card[i]

			if (cardItem.getAttribute('data-type').toLowerCase() === typeValue.toLowerCase()) {
				cardItem.style.display = ''
			} else if (typeValue.toLowerCase() === 'all') {
				cardItem.style.display = ''
			} else {
				cardItem.style.display = 'none'
			}
		}
	})


	// Search filter

	const searchInput = document.querySelector('.search-input')

	searchInput.addEventListener('input', function (e) {
		let searchValue = e.target.value

		for (let i = 0; i < card.length; i++) {
			const cardItem = card[i]

			if (cardItem.getAttribute('data-title').toLowerCase().indexOf(searchValue) > -1) {
				cardItem.style.display = ''
			} else {
				cardItem.style.display = 'none'
			}
		}
	})


	// Add and Remove card

	const cardAdd = document.querySelectorAll('.card__add')
	const menuBlock = document.querySelector('.menu__block')

	function MenuButtonActive() {
		const activeEl = document.querySelectorAll('.main__card.active')

		if (activeEl.length > 0) {
			menuButton.classList.add('active')
		} else {
			menuButton.classList.remove('active')
		}
	}

	for (let i = 0; i < cardAdd.length; i++) {
		const cardButton = cardAdd[i];

		cardButton.addEventListener('click', function () {
			let cardBox = this.closest('.main__card')
			cardBox.classList.toggle('active')

			if (cardBox.classList.contains('active')) {
				menuBlock.append(cardBox.cloneNode(true))
			} else {
				const cardTitle = cardBox.getAttribute('data-title')
				const cardEl = document.querySelector(`.menu__block .main__card[data-title="${cardTitle}"]`)

				cardEl ? cardEl.remove() : null
			}

			MenuButtonActive()

			const dynamicAddButton = document.querySelectorAll('.menu__block .card__add')

			for (let x = 0; x < dynamicAddButton.length; x++) {
				const menuRemoveButton = dynamicAddButton[x];

				menuRemoveButton.addEventListener('click', function () {
					const cardSecondBox = this.closest('.main__card')
					const cardTitle = cardSecondBox.getAttribute('data-title')
					const cardEl = document.querySelector(`.menu__block .main__card[data-title="${cardTitle}"]`)
					const cardMainEl = document.querySelector(`.main__cards .main__card[data-title="${cardTitle}"]`)
					cardEl ? cardEl.remove() : null
					cardMainEl ? cardMainEl.classList.remove('active') : null

					MenuButtonActive()
				})
			}
		})
	} 

}