$(document).ready(function () {
	$(".payment_box li.payment").on("click", function () {
		$("li.payment").css("border-color", "#e2e2e2");
		$(this).css({ "box-shadow": "none", "border-color": "#0086e6" });
		$(".code_number").css("display", "block");
	});
});
