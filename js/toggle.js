$(document).ready(function () {
	$(".toggle-btn").click(function (e) {
		e.preventDefault(); // Prevent the default behavior of the anchor tag
		var target = $(this).data("toggle");
		var showText = $(this).data("show-text");
		var hideText = $(this).data("hide-text");
		var content = $("." + target);

		content.toggle(); // Toggle the visibility of the content

		// Update link text
		if (content.is(":visible")) {
			$(this).text(hideText);
		} else {
			$(this).text(showText);
		}
	});
});
