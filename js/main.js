var main = function() {
	var curActiveContent;
	$('.nav-button').click(function() {
		if($('.content').is(':hidden')) {
    	$('#white-box').delay(200).fadeIn(1000);
		}
		if(curActiveContent !== $(this).attr('id')) {
			$('.content').fadeOut(200);
		}
		if($(this).is('#about-btn')) {
			$('#about').delay(200).fadeIn(200);
		}
		else if($(this).is('#resume-btn')) {
			$('#resume').delay(200).fadeIn(200);
		}
		curActiveContent = $(this).attr('id');
	});
};

$(document).ready(main);
