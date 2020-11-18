$(document).ready(function () {
	$(".sidenav").sidenav();
	$(".collapsible").collapsible();

	$(".carousel.carousel-slider").carousel({
		fullWidth: true,
		indicators: true,
	});
	$("select").formSelect();

	// $("#contact-us input").on("keyup", function () {
	// 	var validator = $("#contact-us").validate();
	// 	if (validator.form() && validateEmail($("#email").val())) {
	// 		$("#msg-btn").prop("disabled", false);
	// 		$("#msg-btn").removeClass("disabled");
	// 	} else {
	// 		$("#msg-btn").prop("disabled", true);
	// 		$("#msg-btn").addClass("disabled");
	// 	}
	// });

	// function validateEmail(email) {
	// 	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	return re.test(email.toLowerCase());
	// }
});
