(function($) {
	'use strict';	
	/*
	Dropdown
	=========================== */
	$('.ul.navbar-nav li.dropdown').on("mouseenter", function() {
		$(this).addClass('active');$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		return false;
	})
	$('.ul.navbar-nav li.dropdown').on("mouseleave", function() {
		$(this).removeClass('active');$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		return false;
	});	
	/*
	Header
	=========================== */
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0){
			$(".navbar-default").addClass("top-nav-collapse");
			return false;
		} else {
			$(".navbar-default").removeClass("top-nav-collapse");
			return false;
		}
	});
	
	/*
	Accordions
	=========================== */
	$('.accordions .panel-heading a[data-toggle="collapse"]').on('click', function () {   
		jQuery('.accordions .panel-heading a[data-toggle="collapse"]').removeClass('active');
		$(this).addClass('active');
	 });

	/*
	Video play
	=========================== */
	$("#ytplayer").css({'opacity':'0','filter':'alpha(opacity=0)'});	
	$( ".start-video" ).click(function() {
		$('#ytplayer').fadeTo(900, 1);$( ".video-image" ).fadeOut(800);
	});
	$(document).on('click', '.start-video', function () {
		$(this).fadeOut(800);
		player.playVideo();
	});
	
	/*
	Hover Diamond Item
	=========================== */
	$('.diamondswrap').each(function(){				
		$(this).find('.item').on({
			mouseenter : function() {
				$(this).find('.content').fadeIn('fast');
				$(this).find('.content').removeClass('animated bounceOut');
				$(this).find('.content').addClass('animated bounceIn');	
			},
			mouseleave : function() {
				$(this).find('.content').removeClass('animated bounceIn');
				$(this).find('.content').addClass('animated bounceOut');
				$(this).find('.content').fadeOut('fast');
			}
		});
	});	
	
	/*
	Half column setting
	=========================== */
	function setFluidLeft(){
		var getGap = $('.half-full').offset().left;
		$('.set-left').each(function(){
			var getWidth = $(this).width();
			var setWidth = getWidth + getGap;
			$(this).find('.fluid').css({
				'width' : setWidth + 'px',
				'left' : '-' + getGap + 'px',
				'padding-left' : getGap + 'px' 
			});
		});
		
		$('.set-right').each(function(){
			var getWidth = $(this).width();
			var setWidth = getWidth + getGap;
			$(this).find('.fluid').css({
				'width' : setWidth + 'px',
				'right' : '-' + getGap + 'px',
				'padding-right' : getGap + 'px' 
			});
		});
	}

	$(window).load(function(){
		setFluidLeft();
		$(this).resize(setFluidLeft);
	});
})(jQuery);

