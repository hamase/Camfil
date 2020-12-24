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
