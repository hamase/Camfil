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

$(document).ready(function () {
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

$(document).ready(function () {
	$("#password-reset").keyup(function () {
		checkPasswordStrength();
	});

	function checkPasswordStrength() {
		var number = /([0-9])/;
		var alphabets = /([a-zA-Z])/;
		var lenght_pass = $("#password-reset").val().length;
		if (lenght_pass < 8) {
			$(".error_pass").css("display", "inline-flex");
		} else if (
			$("#password-reset").val().match(number) &&
			$("#password-reset").val().match(alphabets) &&
			lenght_pass < 21
		) {
			$(".error_pass").css("display", "none");
		} else {
			$(".error_pass").css("display", "inline-flex");
		}
	}

	$("#repassword-reset").keyup(function () {
		if ($("#password-reset").val() == $("#repassword-reset").val()) {
			$("#repassword-reset").css("background-color", "#33e13336");
			$("#password-reset").css("background-color", "#33e13336");
		} else $("#repassword-reset").css("background-color", "#f269696b");
		$("#password-reset").css("background-color", "#f269696b");
	});
});

$(document).ready(function () {
	$("#search-btn, #search-btn-end").click(function () {
		$(".collection_box").css("display", "grid");
		var search_val = $("#search-input-home").val();
		var lists =
			'<li class="collection-item">\n' +
			'<div class="collection_img"><img src="assets/img/slide2.png" alt="" class=""></div>\n' +
			'<div class="collection_txt"><p class="title">6es7214-1ag40-0xb0</p><p class="title_pay">$</p></div>\n' +
			'<a href="#" id="shop-search" class="shop_search"><i class=""><img src="assets/img/shop-white-search.png" /></i></a></li>';
		$(".collection").append(lists);
	});

	$("footer").click(function () {
		$(".collection").css("display", "none");
	});
	// $("#shop-search").click(function () {
	// 	alert("jk");
	// 	$("#shop-add").modal("open");
	// });
	// $("#shop-add").modal({
	// 	dismissible: false,
	// });
});

$(document).ready(function () {
	$(".payment_box li.payment").on("click", function () {
		$("li.payment").css("border-color", "#e2e2e2");
		$(this).css({ "box-shadow": "none", "border-color": "#0086e6" });
	});
	$("#debit").on("click", function () {
		$(".paypal").css("display", "none");
		$(".bank").css("display", "none");
		$(".debit").css("display", "block");
	});
	$("#paypal").on("click", function () {
		$(".debit").css("display", "none");
		$(".bank").css("display", "none");
		$(".paypal").css("display", "block");
	});
	$("#bank").on("click", function () {
		$(".debit").css("display", "none");
		$(".paypal").css("display", "none");
		$(".bank").css("display", "block");
	});
});
