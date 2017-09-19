$(document).ready(function(){
  $('.bxslider').bxSlider({
	  minSlides: 2,
	  maxSlides: 4,
	  auto: true,
	  moveSlides: 1,
	  pause: 3000,
	  slideWidth: 280,
	  slideMargin: 10
	});

  $('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

  $(".vhod").click(function (){
  		if ($(".login").css("display") === "none") {
  			$(".login").css("display", "inline");
  			$(".forgot_pw").css("display", "inline");
  		}else{
  			$(".login").css("display", "none");
  			$(".forgot_pw").css("display", "none");
  		};
  });
  $(".for_search").click(function (){
  		if ($(".input_for_search").css("display") === "none") {
  			$(".input_for_search").css("display", "inline");
  		}else{
  			$(".input_for_search").css("display", "none");
  		};
  });
});