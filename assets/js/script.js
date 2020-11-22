$(document).ready(function () {
	"use strict";
	$(".sidenav").sidenav();
	$(".collapsible").collapsible();

	$(".carousel.carousel-slider").carousel({
		fullWidth: true,
		indicators: true,
	});
	$(".modal").modal();
	$("#account").modal({
		dismissible: false,
	});
	$("select").formSelect();
});
