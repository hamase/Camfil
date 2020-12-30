$(document).ready(function () {
	$(".dropdown-trigger").dropdown();
	$("#flags li").click(function () {
		flag_name = $(this).find("span:nth-child(2)").text();
		flag_img = $(this).css("background-image");
		flag_pos = $(this).css("background-position");
		$(".dropdownBtn").text(flag_name);
		// $(".dropdownBtn").css({
		// 	"background-image": flag_img,
		// 	"background-position": flag_pos,
		// });
	});

	// var countries = [
	// 	{ code: "(+30)", country: "_United_Nations" },
	// 	{ code: "(+3)", country: "ar" },
	// 	{ code: "(+2)", country: "ae" },
	// ];

	// var flag_parent = document.getElementById("flags");
	// var ArrArr = $.map(countries, function (item, i) {
	// 	console.log(item.code);
	// 	var flag_childs =
	// 		'<li class="flag ' + [item.country] + '">' + [item.code] + "</li>";
	// 	flag_parent.append(flag_childs);
	// });
});
