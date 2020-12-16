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
});
