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
	$("#sign-up-btn-2").click(function () {
		$(this).closest(".modal").modal("close");
		$("#sign-up").modal("open");
	});
	$("#forget-pass").click(function () {
		$(this).closest(".modal").modal("close");
		$("#forget").modal("open");
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

	$("select").formSelect();
});
