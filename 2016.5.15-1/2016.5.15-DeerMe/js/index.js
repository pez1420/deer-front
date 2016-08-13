$(document).ready(function () {
	$('.flexslider').flexslider({
		animation: 'fade',
		controlsContainer: '.flexslider'
	});
	$('.boxgrid.slidedown').hover(function(){
		$(".cover", this).stop().animate({top:'-280px'},{queue:false,duration:300});
	}, function() {
		$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
	});
});

$(function(){
	$(".advantage-li").on("mouseenter", function () {
		var $this = $(this);
		$this.css("border","2px solid #ff6666");
		$(this).siblings().css({'opacity': '0.8'});	
		$(this).css({'opacity': '1.0'}).addClass('effect');
	}).on("mouseleave", function () {
		var $this = $(this);
		$this.css("border","2px solid #99ccff");
		$(this).children().fadeTo('100', '1.0').removeClass('effect');	
	});
});

$(document).ready(function () {
    if ($(window).height() < $(document).height()) {
        $('#register').css("position", "fixed");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('#register').css("position", "relative");
        } else {
            $('#register').css("position", "fixed");
        }
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            $('#register').css("position", "relative");
        } else {
            $('#register').css("position", "fixed");
        }
    });
});
