$(document).ready(function () {
	$(".sidenav").sidenav();
	$(".collapsible").collapsible();

	// carousel
	$(".carousel.carousel-slider.home").carousel({
		fullWidth: true,
		indicators: true,
	});
	// move next carousel
	$(".moveNextCarousel").click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".carousel").carousel("next");
	});

	$(".carousel.carousel-slider.product").carousel({
		fullWidth: true,
		indicators: false,
	});
	// move prev carousel
	$(".movePrevCarousel").click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".carousel").carousel("prev");
	});

	autoplay();
	function autoplay() {
		$(".carousel").carousel("next");
		setTimeout(autoplay, 10000);
	}
});
