$(window).on("scroll", function() {
	if ($(window).scrollTop() > 0) {
		$(".header.home-header").addClass("home-header-spacing");

		$(".header").removeClass("hide");

		$(".header.project-header").addClass("project-header-spacing")

		$(".header").removeClass("transparent");

		$(".return-to-top-btn").removeClass("hide");
	} else {
		$(".header").removeClass("home-header-spacing");

		$(".header.home-header").addClass("hide");

		$(".header.project-header").removeClass("project-header-spacing")

		$(".header.project-header").addClass("transparent");

		$(".return-to-top-btn").addClass("hide");
	}
});