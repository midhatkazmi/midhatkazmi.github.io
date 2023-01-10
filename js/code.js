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

var x = document.getElementById("allUXUI");

var y = document.getElementById("allGraphicDesign");

var a = document.getElementById("buttonUXUI");

var b = document.getElementById("buttonGraphicDesign");

var c = document.getElementById("buttonAll");

function onlyUXUI() {
	x.style.display = "block";
	
	y.style.display = "none";
	
	a.classList.add("selected");
	
	b.classList.remove("selected");
	
	c.classList.remove("selected");
}

function onlyGraphicDesign() {
	x.style.display = "none";

	y.style.display = "block";

	a.classList.remove("selected");

	b.classList.add("selected");

	c.classList.remove("selected");
}

function allProjects() {
	x.style.display = "block";

	y.style.display = "block";

	a.classList.remove("selected");

	b.classList.remove("selected");

	c.classList.add("selected");
}