
var parralaxSpeed = 3;


function Parralax(){

	var i = 0;

	$(".parralax").each(function(){

		var speed = $(this).attr("data-parralax-speed");

		if(!speed){
			speed = 1;
		}

		var section = $(this).closest("section");

		var origin = $(this).attr("data-top");

		if(!origin){
			origin = 0;
		}

		origin = origin * (window.innerWidth / 15) 

		var offset =  origin - (($(window).scrollTop()  - (section.offset().top)  ) /  (10 / (parralaxSpeed * speed) ) ) ;

		$(this).css("top", offset);

		i++;

	});



	$("section").each(function(){

		if( $(this).attr("id") != "start"){

			height = $(this).attr("data-height");

			if(!height){
				height = 0;
			}

			height = height * (window.innerWidth / 14) 

			$(this).css("height", height);
		}

	});

	



	$(".devider").each(function(){

		if( parseInt( $(this).offset().top ) - window.innerHeight < $(window).scrollTop() ){
			$(this).css("opacity","1");
		}else{
			$(this).css("opacity","0");
		}

	});
}