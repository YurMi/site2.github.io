//=========================Подключение  Slick Slider===============================================
$(document).ready(function(){
	//==============Slick Slider====================================
	$('.header__body__slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,
	});

	//===========Бургер Меню====================================
	$(".meny__burger").click(function(event){
		$(".meny__burger").toggleClass("active");
		$(".header__meny").toggleClass("active");
		$("body").toggleClass("lock");
	});

//=========================Подключение картинки через HTML как фоновую===============================================
	function ibg(){
		$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
		});
	}
ibg();
});