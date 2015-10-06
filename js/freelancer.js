// Closes the Responsive Menu on Menu Item Click

$(document).ready(function() {
	$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
	});
});