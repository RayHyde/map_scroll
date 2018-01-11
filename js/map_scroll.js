$(document).ready(function() {
	var windowHeight = $(window).height(),
			windowWidth = $(window).width(),
			verticalCenter = windowHeight / 2,
			horizontalCenter = (windowWidth / 2) - 200,
			wrapWidth = $('.wrap').width,
			ball = $('.ball'),
			nav = $('nav'),
			navA = $('nav a'),
			mapSpeed = 2000,
			openSpeed = 1000;

	//center on London on page load
	$('html, body').animate({ scrollTop: ($('#box1').offset().top) - verticalCenter, scrollLeft: ($('#box1').offset().left) - horizontalCenter }, mapSpeed);

	//set London as active in the topmenu on pageload
	$('nav .box1').addClass('active');

	//clicks on links
	$('.boxlink, nav a').click(function() {
		var box = $(this).attr('class').split(' ')[0],
				boxClass = '.' + box,
				boxID = '#' + box,
				boxIDinner = boxID + ' .inner';

		//set the topmenu links inactive/active
		navA.removeClass('active');
		nav.find(boxClass).addClass('active');

		closeBox();

		//scroll to the next ball
		$('html, body').animate({ scrollTop: ($(boxID).offset().top) - verticalCenter ,  scrollLeft: ($(boxID).offset().left) - horizontalCenter }, mapSpeed);

		//open the box
		$(boxID).animate({width : "400px", height: "250px"}, openSpeed);
		$(boxIDinner).animate({"opacity" : "1", }, openSpeed);
		return false;
	});

	//open it's box when clicked on any closed ball
	ball.click(function() {
		$(this).animate({width : "400px", height: "250px"}, openSpeed);
		$(this).find('.inner').animate({"opacity" : "1"}, openSpeed);
		return false;
	});

	//close all boxes when background map is clicked
	$('.wrap').click(function() {
		closeBox();
	});

	function closeBox() {
		ball.animate({width : "50px", height: "50px"}, openSpeed);
		ball + $('.inner').animate({"opacity" : "0"}, openSpeed);
		return false;
	}
});
