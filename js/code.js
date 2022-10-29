$(window).on("scroll", function() {
	if ($(window).scrollTop() > 0) {
		$(".header.none").removeClass("none");

		$(".header.top").removeClass("top");		

		$(".header.transparent").removeClass("transparent");
	} else {
		$(".header-home").addClass("none");

		$(".header-home").addClass("top");

		$(".header-landing").addClass("top");	

		$(".header-landing").addClass("transparent");
	}
});