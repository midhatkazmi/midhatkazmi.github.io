window.onscroll = function() {myFunction()};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	var scrolled = (winScroll / height) * 100;

	document.getElementById("myScrollBar").style.width = scrolled + "%";
}

$(window).on("scroll", function() {
	if ($(window).scrollTop() > 0) {
		$(".header").addClass("active");

		$(".scroll-up-btn").addClass("active");
	} else {
		$(".header").removeClass("active");

		$(".scroll-up-btn").removeClass("active");
	}
});

function menuFunction() {
	var x = document.getElementById("myHeader");

	if (x.className === "header" || x.className === "header active" || x.className === "header sticky" || x.className === "header sticky active") {
		x.className += " responsive";
	} else {
		x.className = "header";
	}
}