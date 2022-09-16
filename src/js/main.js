const burgerBtn = document.querySelector('.burger-btn'),
	logoBox = document.querySelector('.nav__logo-box'),
	allNavItems = document.querySelectorAll('.mobile-item'),
	mobileNav = document.querySelector('.nav__mobile-nav'),
	dropdownMobileBtn = document.querySelector('.dropdown-btn-mobile'),
	offerMobileChevron = document.querySelector('.offer-chevron-mobile'),
	offerMobileList = document.querySelector('.mobile-list'),
	dropdownDesktopBtn = document.querySelector('.dropdown-btn-desktop'),
	offerDesktopChevron = document.querySelector('.offer-chevron-desktop'),
	offerDesktopList = document.querySelector('.desktop-list'),
	firstBar = document.querySelector('.burger-btn__bar--one'),
	secondBar = document.querySelector('.burger-btn__bar--two'),
	thirdBar = document.querySelector('.burger-btn__bar--three'),
	shadow = document.querySelector('.shadow')

const handleNav = () => {
	mobileNav.classList.toggle('nav-active')
	document.body.classList.toggle('overflow')
	shadow.classList.toggle('shadow-active')

	firstBar.classList.toggle('first-cross')
	thirdBar.classList.toggle('third-cross')
	secondBar.classList.toggle('second-cross')

	allNavItems.forEach(item => {
		item.addEventListener('click', closeMobileNav)
	})

	logoBox.addEventListener('click', () => {
		if (window.innerWidth < 992 && mobileNav.classList.contains('nav-active')) {
			closeMobileNav()
		}
	})

	shadow.addEventListener('click', closeMobileNav)
}

const handleOfferListMobile = () => {
	offerMobileList.classList.toggle('hide')
	offerMobileChevron.classList.toggle('rotate-offer-chevron')
}

const handleOfferListDesktop = () => {
	offerDesktopList.classList.toggle('nav__offer-list--desktop-active')
	offerDesktopChevron.classList.toggle('rotate-offer-chevron')
}

const closeMobileNav = () => {
	mobileNav.classList.remove('nav-active')
	document.body.classList.remove('overflow')
	firstBar.classList.remove('first-cross')
	thirdBar.classList.remove('third-cross')
	secondBar.classList.remove('second-cross')
	shadow.classList.remove('shadow-active')
}

burgerBtn.addEventListener('click', handleNav)
dropdownMobileBtn.addEventListener('click', handleOfferListMobile)
dropdownDesktopBtn.addEventListener('click', handleOfferListDesktop)
