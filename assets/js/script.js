$(document).ready(function () {
	"use strict";
	$(".sidenav").sidenav();
	$(".collapsible").collapsible();

	$(".carousel.carousel-slider").carousel({
		fullWidth: true,
		indicators: true,
	});

	$(".modal").modal();
	// close prev modal
	$("#login-btn").click(function () {
		$(this).closest(".modal").modal("close");
		$("#login").modal("open");
	});
	$("#sign-up-btn").click(function () {
		$(this).closest(".modal").modal("close");
		$("#sign-up").modal("open");
	});

	$("#sign-up").modal({
		dismissible: false,
	});
	$("#login").modal({
		dismissible: false,
	});

	$("select").formSelect();
});
