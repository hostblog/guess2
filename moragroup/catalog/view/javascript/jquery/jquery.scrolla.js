(function($){
	jQuery.fn.scrolla = function(options){
		options = $.extend({
			mobile: false,
			once: false
		}, options);

		if (options.mobile === false) {
			if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				return false;
			}
		} 
		
		var elements = this;

		function animate() {
			var viewHeight = $(window).height();
			var viewTop = $(window).scrollTop();
			var viewBottom = (viewTop + viewHeight);

			$.each(elements, function() {
				var elementAnimation = $(this).data('animate');
				var elementOffset = $(this).data('offset');
				var elementDuration = $(this).data('duration');
				var elementDelay = $(this).data('delay');
				var elementHeight = $(this).outerHeight();
				var elementTop = $(this).offset().top;
				var elementBottom = (elementTop + elementHeight);

				if (elementOffset) {
					var elementTop = elementTop + elementOffset;
					var elementBottom = elementBottom - elementOffset;
				}

				$(this).css({'-webkit-animation-duration': elementDuration, 'animation-duration': elementDuration});
				$(this).css({'-webkit-animation-delay': elementDelay, 'animation-delay': elementDelay});
		 
				if ((elementBottom >= viewTop) && (elementTop <= viewBottom)) {
					$(this).css('visibility', 'visible');
					$(this).addClass(elementAnimation);
					$(this).addClass('animated');
				}
				else {
					if (options.once === false) {
						$(this).css('visibility', 'hidden');
						$(this).removeClass(elementAnimation);
						$(this).removeClass('animated');
					}
				}
			});
		}

		$(window).on('scroll', animate);
		$(window).trigger('scroll');

	};
})(jQuery);

