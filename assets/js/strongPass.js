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

	$(".newPass").keyup(function () {
		if ($("#password-reset").val() == $("#repassword-reset").val()) {
			$(".newPass").css("background-color", "#33e13336");
		} else $(".newPass").css("background-color", "#f269696b");
	});
});
