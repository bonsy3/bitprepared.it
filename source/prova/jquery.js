$(document).ready(function() {
	$(".show_title").hide();

});

$(window).scroll(function() {

	
if ($(this).scrollTop() > 1){  
    $('figure').hide();
    $("nav").css("top", "0");
	$(".show_title").show();
	$(".hide_title").hide();
  }
});

	$( window ).resize(function() {
		if ($(window).width() < 768) {
			$('header').hide();
		}
		else {
			$('header').show();
		}
	});
