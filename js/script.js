"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let i = 0; i < menuArrows.length; i++) {
			const menuArrow = menuArrows[i];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}


// Burger menu
const burger = document.querySelector('.header__icon');
if (burger) {
	const menu = document.querySelector('.menu');
	burger.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}

// Header behaviour on scroll
let lastScroll = 10;
window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;

	if (currentScroll <= 0) {
		document.body.classList.remove('scroll-up');
	}

	if (currentScroll > lastScroll && !document.body.classList.contains('scroll-down')) {
		document.body.classList.remove('scroll-up');
		document.body.classList.add('scroll-down');
	}

	if (currentScroll < lastScroll && document.body.classList.contains('scroll-down')) {
		document.body.classList.remove('scroll-down');
		document.body.classList.add('scroll-up');
	}

	lastScroll = currentScroll;
});