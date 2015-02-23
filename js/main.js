$(document).ready(function(){

	Resize();
	Parralax();

	$(".menubtn").click(function(){

		$("nav").fadeToggle();

		return false;
	});

	$("nav").click(function(){
		$(this).fadeOut();
	});

	$("#scrolldown").click(function(){
	 	$('html, body').animate({
	        scrollTop: $("#about").offset().top
	    }, {
            duration: 800,
            easing: 'swing'});
	});

});


$(window).scroll(function(){ 	Parralax();	});  //Paralax.js
$(window).resize(function(){ 	Resize(); 	Parralax();	});  //Resize.js