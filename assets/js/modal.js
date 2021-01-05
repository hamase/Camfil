$(document).ready(function () {
	$(".tooltipped").tooltip();
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
	$("#add-product-btn").click(function () {
		$("#product-add").modal("open");
	});
	$("#share-btn").click(function () {
		$("#product-share").modal("open");
	});
	$("#ask-btn").click(function () {
		$("#question-box").modal("open");
	});
	$("#req-quote").click(function () {
		$("#quote-box").modal("open");
	});
	$("#confirm-btn").click(function () {
		$(this).closest(".modal").modal("close");
		$("#quote-ok").modal("open");
	});
	$("#save-changes").click(function () {
		$("#save").modal("open");
	});
	$("#save-ok").click(function () {
		$(this).closest(".modal").modal("close");
		$("#signout").modal("open");
	});
	$("#edit-info").click(function () {
		$("#edit").modal("open");
	});
	$("#checkout-btn").click(function () {
		$("#checkout-box").modal("open");
	});
	$("#notif-badge").click(function () {
		$(".basket_box").css("display", "none");
		$(".notif_box").css("display", "block");
	});
	$("#notif-basket").click(function () {
		$(".notif_box").css("display", "none");
		$(".basket_box").css("display", "block");
	});
	$(".all_notif a.modal-close").click(function () {
		$(".all_notif").css("display", "none");
	});
	$("main").click(function () {
		$(".notif_box, .basket_box").css("display", "none");
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
	$("#feedback-box").modal({
		dismissible: false,
	});
	$("#product-add").modal({
		dismissible: false,
	});
	$("#product-share").modal({
		dismissible: false,
	});
	$("#question-box").modal({
		dismissible: false,
	});
	$("#quote-box").modal({
		dismissible: false,
	});
	$("#quote-ok").modal({
		dismissible: false,
	});
	$("#save").modal({
		dismissible: false,
	});
	$("#signout").modal({
		dismissible: false,
	});
	$("#edit").modal({
		dismissible: false,
	});
	$("#checkout-box").modal({
		dismissible: false,
	});

	$("select").formSelect();

	//copy clipboard
	$("#copy-btn").click(function () {
		var text = $("#clipboard-val").attr("value");
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(text).select();
		document.execCommand("copy");
		$temp.remove();
		$(this).find("span").html("Link copied");
	});
});
