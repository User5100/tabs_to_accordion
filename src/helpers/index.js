'use strict'

export function toggleActiveClass(event) {
  event.target.classList.toggle('main__button--active')
}

export function getArticleElement(event) {
  return event.target.nextElementSibling
}

function isStyleDisplayBlock(styleDisplay) {
  return styleDisplay === 'block'
}

export function setDisplay(styleDisplay) {
	if(isStyleDisplayBlock(styleDisplay)) {
		return 'none'
	} else {
		return 'block'
	}
}
