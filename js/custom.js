$(function(){
	
	

	var $dis=$('.header').offset().top;
	
	
	$('.topbtn').click(function(){
		
		$('html,body').animate({
			
			scrollTop: 0
			
		} , 1000);
		
	});
	
	




$(window).scroll(function(){
	
	var $scroll = $(this).scrollTop();
	
	
	if($scroll >= 300){
		
		$('.topbtn').fadeIn();
		
	}
	
	else{
		
		$('.topbtn').fadeOut();
		
	}
	
	
	
	
	if($scroll >= $dis){
		
		$('.header').addClass('sticky');
	}
	
	else{
		
		$('.header').removeClass('sticky');
		
	}
	
	
});




});















