$(document).ready(function() {
	 $('.restore-form').parsley();
	 $('.login-form').parsley();
	 $('.reset-form').parsley();
	 $('.menu-btn').click(function(){
	 	$('.sidebar').slideToggle();
	 });

	 $('.search-adv').click(function(){
	 	$('.search-form-adv').slideToggle();
	 });

	 $('.cont-more').click(function(){
	 	$(this).next('.contact-more-block').slideToggle();
	 	return false
	 });


	 $('.more-link').click(function(){
	 	$(this).parents('td').find('.more-block').slideToggle();
	 	return false
	 });

	  $('.row-del').click(function(){
	 	$(this).parents('tr').remove();
	 
	 });

	  $('.news-more').click(function(){
	 	$(this).parents('td').find('.news-full').slideToggle();
	 	return false
	 });

	 $('.user-top-block .zmdi-chevron-down').click(function(){
	 	$('.maindrop').slideToggle();
	 });

	 $('.md-close').click(function(){
	 	$('.maindrop').slideToggle();
	 });

	   $('.edit-vendor').click(function(){
		 	$('.field-value').addClass('field-value-hidden');
		 	$('.edit-field').addClass('edit-field-show');
		 	$(".edit-check input").removeAttr("disabled");
	 		return false
	 	});

	    $('#check-save').click(function(){
		 	$(".edit-check input").attr("disabled",'true');
	 	});

	  $('.ct1').click(function(){
	  	$('.ct-tag').removeClass('active');
	  	$(this).addClass('active');
	 	$('.utp-block2').slideUp();
	 	$('.utp-block3').slideUp();
	 	$('.utp-block1').slideToggle();
	 });

	   $('.ct2').click(function(){
	   	$('.ct-tag').removeClass('active');
	  	$(this).addClass('active');
	   	$('.utp-block1').slideUp();
	 	$('.utp-block3').slideUp();
	 	$('.utp-block2').slideToggle();
	 });

	    $('.ct3').click(function(){
	    	$('.ct-tag').removeClass('active');
	  	$(this).addClass('active');	
	    $('.utp-block2').slideUp();
	 	$('.utp-block1').slideUp();
	 	$('.utp-block3').slideToggle();
	 });

	  $(".custom-select").selectBox();

});

$("body").click(function (event) {
	if ($(event.target).closest(".ct-tag").length === 0) {
		 $(".utp-dropdown").slideUp();
		 $(".ct-tag").removeClass('active');
	}
});