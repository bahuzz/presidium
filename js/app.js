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

	 $('.open-hidden-block-btn').click(function(){
	 	$(this).next('.hidden-block').slideToggle();
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
		$('.if-edit-vendor').addClass('if-edit-vendor-true');
		$('.open-hidden-block-btn').removeClass('hidden');
		$('.btns.hidden').removeClass('hidden');
		$('.row-del.hidden').removeClass('hidden');
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

	// document. add document panel
	var autoSizes = $('textarea.auto-size');
	if (autoSizes.length){
		$(autoSizes).textareaAutoSize();
	}

  $('.btn-add-document').click(function(){
		var panel = $(this).parents('.panel-add-document');
		var fileName = $(panel).find('input').val();

		$(panel).find('.ps-dropdown').slideToggle();
		$(panel).find('.file-name').text(fileName);

		if (fileName){
			$(panel).addClass('selected');
			$(panel).find('.save').prop('disabled', false);
		}else{
			$(panel).find('.save').prop('disabled', true);
			$(panel).removeClass('selected');
		}
    	return false
	});

	$('.panel-add-document .cancel').click(function(){
		var panel = $(this).parents('.panel-add-document');

		$(panel).find('.ps-dropdown').slideToggle();
		$(panel).find('form').get(0).reset();
		$(panel).removeClass('selected').find('.file-name').text('');
		return false
	});

	$('.panel-add-document input[type="file"]').bind('change', function(){
		var fileName = $(this).val();
		var panel = $(this).parents('.panel-add-document');

		if (fileName){
			$(panel).addClass('selected').find('.file-name').text(fileName);
			$(panel).find('.save').prop('disabled', false);
		}else{
			$(panel).removeClass('selected').find('.file-name').text('');
			$(panel).find('.save').prop('disabled', true);
		}
	});

	$('.ds-field').change(function(){
		$(this).parents('tr').find('button.save').prop('disabled', false)
	});

	$(".custom-select").selectBox();

	// email radio buttons
	$('input[type="radio"]').change(function(){
		 $(this).parents('.edit-mail-wrapper').find('.email-tooltip').hide();
		 $(this).parents('.radio').find('.email-tooltip').show();
	 }).each(function(){
		if ($(this).prop('checked')){
			$(this).parents('.radio').find('.email-tooltip').show();
		}else{
			$(this).parents('.radio').find('.email-tooltip').hide();
		}
	});

	$('.datepicker').datepicker({
		autoclose: true,
		format: 'dd/mm/yyyy'
	});

	/* vendor-details check box dependencies */
	// Inspection at their location Format
	var vendorDetailsInsp = function(showFlag){
		var el = $('.vendor-details-insp-dependency');
		showFlag ? el.removeClass('hidden') : el.addClass('hidden');
	};

	vendorDetailsInsp($('.vendor-details-insp-check').change(function(){
		vendorDetailsInsp($(this).prop('checked'))
	}).prop('checked'));

	// Drawing / Inspection Charge
	var vendorDetailsDrw = function(showFlag){
		var el = $('.vendor-details-drw-dependency');
		showFlag ? el.removeClass('hidden') : el.addClass('hidden');
	};

	vendorDetailsDrw($('.vendor-details-drw-check').change(function(){
		vendorDetailsDrw($(this).prop('checked'))
	}).prop('checked'));

});

$("body").click(function (event) {
	if ($(event.target).closest(".ct-tag").length === 0) {
		 $(".utp-dropdown").slideUp();
		 $(".ct-tag").removeClass('active');
	}
});