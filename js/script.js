




$(".btn").on("click", function() {

	/* Get the class name for the chart we want from the button markup in index.html */
	var chartName = $(this).attr("val");

	/* Hide all of the charts */
	$(".chart-container").fadeOut();

	/* Show the one we want using the class name we pulled from the clicked button */
	$(".chart-container."+chartName).fadeIn();


	/* Remove the active class from all of the buttons. */
	$(".btn").removeClass("active");

	/* Add the active class to the one we just clicked */
	$(this).addClass("active");


});




