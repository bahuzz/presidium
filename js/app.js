$(document).ready(function(){
  $('.restore-form').parsley();
  $('.login-form').parsley();
  $('.reset-form').parsley();
  $('.menu-btn').click(function(){
    $('.sidebar').slideToggle();
  });

  $('.btn-preloader').click(function(){
    $('.preloader-wrapper').fadeIn();
  });

  $('.btn-lp').click(function(){
    $('.preloader-wrapper-local').fadeIn();
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
    $(this).parents('tr')[0].remove();

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

  $('.forms-wrapper').click('.edit-row', function(event){
    var parent = $(event.target).parents('tr')[0];
    $(parent).find('.field-value').addClass('field-value-hidden');
    $(parent).find('.edit-field').addClass('edit-field-show');
    $(parent).next('.edit-buttons').slideDown();
    return false
  });

  $('#check-save').click(function(){
    $(".edit-check input").attr("disabled", 'true');
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
  $('.edit-vendor').click(function(){
    var autoSizes = $('textarea.auto-size');
    if (autoSizes.length){
      $(autoSizes).textareaAutoSize();
    }
  });

  $('.btn-add-document').click(function(){
    var panel = $(this).parents('.panel-add-document');
    var fileName = $(panel).find('input').val();

    $(panel).find('.ps-dropdown').slideToggle();
    $(panel).find('.file-name').text(fileName);

    if (fileName){
      $(panel).addClass('selected');
      $(panel).find('.save').prop('disabled', false);
    } else {
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
    } else {
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
    } else {
      $(this).parents('.radio').find('.email-tooltip').hide();
    }
  });

  var dateFormat = 'dd/mm/yyyy';
  var datepicker = $('.datepicker');

  if (datepicker.length){
    $(datepicker).datepicker({
      autoclose: true,
      format: dateFormat
    });
  }

  // Email settings
  var emailTypes = $('.email-select-type');
  if (emailTypes){
    var current = $(emailTypes[0]).val();
    var selectType = function(type){
      $('.email-type').hide();
      $('.' + type).show();
    };
    selectType(current);

    $(emailTypes).change(function(){
      selectType($(this).val());
    });
  }


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

  // date range
  var noteRange = $('.notes-range');
  if (noteRange.length){
    $(noteRange).datepicker({
      inputs: $('.notes-range input'),
      format: dateFormat
    });
  }

  var dateDelta = 3;
  var noteRangeStart = $('.notes-range .range-start');
  var noteRangeEnd = $('.notes-range .range-end');
  noteRangeStart.length && $(noteRangeStart).datepicker('setDate', new Date((new Date()) - dateDelta * 864 * 1e5));
  noteRangeEnd.length && $(noteRangeEnd).datepicker('setDate', new Date());

  // vendor notes. "see more"
  $('.cont-more').click(function(){
    $(this).parents('tr').find('.cont-more-block').slideToggle();
    return false
  });

  //////// dropdowns ///////////
  var dropdowns = $('.dropdown');
  $(dropdowns).each(function(){
    this.dropdownReset = function(){
      var selectedEl = $(this).find('[data-selected]');
      $(this).find('[data-option]').removeClass('selected');
      $(selectedEl).addClass('selected');
      $(this).find('input[type=hidden]').val($(selectedEl).data('option'));
      $(this).find('.value').html($(selectedEl).html());
      return this
    };

    this.dropdownSetOption = function(option){
      var selector = '[data-option=' + option + ']';
      var selectedEl = $(this).find(selector);
      $(this).find('[data-option]').removeClass('selected');
      $(selectedEl).addClass('selected');
      $(this).find('input[type=hidden]').val($(selectedEl).data('option'));
      $(this).find('.value').html($(selectedEl).html());
      $(this).addClass('selected');
      return this
    }
  }).find('[data-option]').click(function(){
    var parent = $(this).parents('.dropdown')[0];
    $(parent).find('[data-option]').removeClass('selected');
    $(this).addClass('selected');
    $(parent).find('input[type=hidden]').val($(this).data('option'));
    $(parent).find('.value').html($(this).html());
    //return false;
  });
  $(dropdowns).each(function(){
    this.dropdownReset();
    //this.dropdownSetOption('role4');
  });

  // vendor notes editor
  /*
  var getVendNoteEdConfig = function(id){
    return {
      mode: "exact",
      elements: id,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code'
      ],
      toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      content_css: [
        '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
        '//www.tinymce.com/css/codepen.min.css'
      ]
    }
  };

  $('.vendor-note-edit').click(function(){

    var noteCell = $(this).parents('tr').find('.news-title');
    var content = $(noteCell).find('.cont-more-block').hide().find('.note-wrapper').html();
    var id = $(noteCell).find('.editor-source').attr('id');

    tinyMCE.init(getVendNoteEdConfig(id));

    var editor = tinyMCE.get(id);
    editor.setContent(content);
    editor.show();

    $(noteCell).find('.edit-block').removeClass('hidden');
  });

  $('.edit-block .save').click(function(){
    var noteCell = $(this).parents('td');
    var container = $(this).parents('.edit-block');
    var id = $(container).find('.editor-source').attr('id');
    var content = tinymce.get(id).getContent();

    $(container).addClass('hidden');
    //tinymce.get(id).hide();
    $(noteCell).find('.note-wrapper').html(content).parent().show();

    tinymce.get(id).remove();

  });

  $('.edit-block .cancel').click(function(){
    var noteCell = $(this).parents('td');
    var container = $(this).parents('.edit-block');
    var id = $(container).find('.editor-source').attr('id');
    //var content = $(noteCell).find('.note-wrapper').html();
    //var editor = tinymce.get(id);

    $(container).addClass('hidden');
    //editor.setContent(content);
    //editor.hide();
    $(noteCell).find('.note-wrapper').parent().show();

    tinymce.get(id).remove();

  });
  */

  var copyNotesIntoTextareas = function(){
    $('.note-wrapper').each(function(){
      $(this).parents('td').find('.editor-source').val($(this).html());
    })
  };
  var getEditorConf = function(){
    return {
      selector: 'textarea',
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code textcolor colorpicker '
      ],
      menubar: false,
      statusbar: false,
      theme_advanced_resizing_min_height: 500,
      min_height: 200,
      //toolbar: 'insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | forecolor backcolor emoticons',
      toolbar: 'insertfile undo redo styleselect bold italic bullist numlist outdent indent  link image  forecolor backcolor emoticons',
      content_css: [
        '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
        '//www.tinymce.com/css/codepen.min.css'
      ]
    }
  };
  $('.edit-vendor').click(function(){
    if (typeof tinyMCE !== 'undefined'){
      copyNotesIntoTextareas();
      var conf = getEditorConf();
      conf.selector = 'textarea.editor-source';
      tinyMCE.init(conf);

      $('.cont-more-block').hide().find('.note-wrapper').addClass('hidden');
      $('.edit-block').removeClass('hidden');
      $('.cont-more-block').show();
    }
  });

  $('.btn-add-item').click(function(){
    var conf = getEditorConf();
    conf.min_height = 300;
    conf.selector = 'textarea#vendor-note-add';

    tinyMCE.init(conf);
    $('.note-add-container').show()
  });

  ///// add price breaks ////////
  $('.rowdiv-del').click(function(){
    $(this).parents('.tb-row')[0].remove();

  });
  $('.add-pb').click(function(){
    var template = $('#price-breaks-template').html();
    var target = $(this).parents('.products-full').find('.table-pb');
    var row = $(template).appendTo(target);
    $(row).find('.rowdiv-del').click(function(){
      $(row).remove();
    });
  });
});

$("body").click(function(event){
    if ($(event.target).hasClass('utp-dropdown')) {
      return false;
    } else
  if ($(event.target).closest(".ct-tag").length === 0){
    $(".utp-dropdown").slideUp();
    $(".ct-tag").removeClass('active');
  }
});

///// overview redirect /////////
$('.table-overview tbody').click(function(){
  window.location = 'main.html'
});

$('#myModal').on('shown.bs.modal', function (e) {
  $('.modal-preloader').fadeOut();
})

////// MAIL PAGE //////

if($('.mail-wrapper').length) {
  mailPanels();
  $(window).on('resize', function() {
    mailPanels();
  });
  $('.mailboxes li').on('click', function() {
    if($(window).width() >= 724) {
      return false;
    } else {
      $('.mail-list').css('left', '64px');
      $('.mail-back-mailboxes').fadeIn();
    }
  });
  // $('.mail-preview').on('click', function() {
  //   if(parseInt($('.mail-full').css('left'), 10) != 724) {
  //     $('.mail-full').css('left', '64px');
  //     $('.mail-back-mailboxes').fadeOut();
  //     $('.mail-back-inbox').fadeIn();
  //   } else {
  //     return false;
  //   }
  // });
  $('.mail-back-inbox').on('click', function() {
    $(this).fadeOut();
    $('.mail-full').css('left', $('.mailboxes').outerWidth() + 64 + $('.mail-list').outerWidth());
    if(parseInt($('.mail-list').css('left'), 10) == 64) {
      $('.mail-back-mailboxes').fadeIn();
    }
  });
  $('.mail-back-mailboxes').on('click', function() {
    $(this).fadeOut();
    $('.mail-list').css('left', $('.mailboxes').outerWidth() + 64);
  });
  $('.mail-preview').click(function(){
    window.location = 'mail-full.html'
  });
  $('.js-color').on('click', function() {
    $('.js-color').removeClass('checked');
    $(this).addClass('checked');
  });
  $('.js-contacts').on('click', function() {
    window.location = 'contacts.html'
  });
  $('.js-add-contact').on('click', function() {
    var contactTemplate = $('.forms-wrapper form:last-child').html();
    var form = '<form></form>';
    $('.forms-wrapper').append("<form></form>");
    $('form:last-child').html(contactTemplate);
    $('form:last-child input').each(function() {
      $(this).val('');
    });
    $('form:last-child').find('.edit-row').click();
    $('form:last-child td:first-child input').focus();
    $('html, body').animate({
      scrollTop: $('form:last-child').offset().top
    }, 1000);
  })

  $('.js-remove-attachment').on('click', function() {
    $(this).parent().fadeOut();
  });

  $( '.inputfile' ).each( function() {
    var $input   = $( this ),
      $label   = $input.next( 'label' ),
      labelVal = $label.html();

    $input.on( 'change', function( e ) {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( 'span' ).html( fileName );
      else
        $label.html( labelVal );
    });
  });

  tinymce.init({ selector:'.mail-wrapper textarea' });
}

function mailPanels() {
  var mailboxesW = $('.mailboxes').outerWidth();
  var mailListW = $('.mail-list').outerWidth();
  var fullMailW = $('.mail-full').outerWidth();
  $('.mail-container').css('width', mailboxesW + mailListW + fullMailW);
  $('.mail-list').css('left', mailboxesW + 64);
  // $('.mail-full').css('left', mailboxesW + 64 + mailListW);
}
