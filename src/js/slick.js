$(document).ready(function () {
	$('.reviews__boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		mobileFirst: true,
        arrows: false,
        prevArrow:"<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
		responsive: [
			{
				breakpoint: 992,
				settings: {
                    arrows:true,
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	})
})
