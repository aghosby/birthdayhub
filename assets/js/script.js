$(document).ready(function() {
	"use strict";
	$('.header').scrollToFixed({
		zIndex: 7
	});

    $('.flexslider').flexslider({
		animation: "fade",
		controlNav: true,
		animationSpeed: 3000,
		directionNav: true
	});


	$(".menuButton").click(function() {
		$(".menu").toggleClass('open');
	});
	
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		
		var d = $('.header');
		if (scroll >= 50) d.addClass('smheader');
		else d.removeClass('smheader');
	});
	
	var $animation_elements = $('.-js_anime');
	var $window = $(window);
	
	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);
		
		$.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);
			
			if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
				$element.addClass('in-view');
			} else {
				$element.removeClass('in-view');
			}
		});
	}
	
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
});