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
