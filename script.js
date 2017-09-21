$(document).ready(function(){
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		var find_class_small = $.contains('#nav', '.small');

		if(top > 200 && find_class_small === false) {
			$('#nav').addClass('small');
		} else {
			$('#nav').removeClass('small');
		}
	});
});

$(document).ready(function() {
	$('a[href^="#"]').click(function() {
		var hash = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1200);
		return false;
	});
});