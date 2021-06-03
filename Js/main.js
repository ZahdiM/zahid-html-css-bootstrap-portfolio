
$(document).ready(function () {
$('#top-menu li a').on('click', function() {
	
		$('#top-menu a.active').removeClass('active');
        $(this).addClass('active');

    var scrollAnchor = $(this).attr('data-scroll');
    var scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

});

});

