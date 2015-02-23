function Resize(){

	$("h1").each(function(){
		$(this).height( $(this).width() );
		$(this).css("line-height", parseInt($(this).width()) * 0.98 + "px" );
	});


	
	//Make the start fullscreen
	$("#start").height(window.innerHeight - (window.innerWidth / 100 * 5) + "px");
	$("#startimg").height(window.innerHeight  - (window.innerWidth / 100 * 2.5) + "px");
	$("#startimg").width(window.innerHeight  - (window.innerWidth / 100 * 2.5) + "px");

	$("#startimg").css("left", (   parseInt($("#startimg").closest(".inner").width()) - parseInt( $("#startimg").height() ) ) / 2 + "px");
}
