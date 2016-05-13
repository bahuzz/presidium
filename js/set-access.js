$(document).ready(function() {

  if($('.admin-access').length) {

    $('.tree-view input[type="checkbox"]').on('change', function() {

      var target = $(this).attr('id');
      $('.admin-access__description form').fadeOut();

      $('.admin-access__description form').each(function() {

        if($(this).data('rule') == target) {
          $(this).fadeIn();
        }

      });

    });
  }

});