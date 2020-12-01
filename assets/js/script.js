$(document).ready(function () {
	"use strict";
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

	// modal
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
	$("#sign-up-btn-2").click(function () {
		$(this).closest(".modal").modal("close");
		$("#sign-up").modal("open");
	});
	$("#forget-pass").click(function () {
		$(this).closest(".modal").modal("close");
		$("#forget").modal("open");
	});
	$("#feedback-btn").click(function () {
		$("#feedback-box").modal("open");
	});
	$(".delete_icon").click(function () {
		$("#delete").modal("open");
	});
	// ok modals
	$("#register-submit").click(function () {
		$(this).closest(".modal").modal("close");
		$("#register-ok").modal("open");
	});
	$("#reset-pass-btn").click(function () {
		// this is temporary, it will be shown by email link
		$(this).closest(".modal").modal("close");
		$("#reset-pass").modal("open");
	});
	$("#reset-pass-ok").click(function () {
		$(this).closest(".modal").modal("close");
		$("#reset-ok").modal("open");
	});
	// close just by close button, not click on body
	$("#sign-up").modal({
		dismissible: false,
	});
	$("#login").modal({
		dismissible: false,
	});
	$("#forget").modal({
		dismissible: false,
	});
	$("#register-ok").modal({
		dismissible: false,
	});
	$("#reset-pass").modal({
		dismissible: false,
	});
	$("#reset-ok").modal({
		dismissible: false,
	});
	$("#delete").modal({
		dismissible: false,
	});
	$("#feedback").modal({
		dismissible: false,
	});
	$("select").formSelect();

	// quantity card
	$(".button_quantity").click(function () {
		var button = $(this);
		var oldValue = button.siblings("input[type=text]").val();

		if (button.val() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		button.parent().find("input[type=text]").val(newVal);
	});
});
