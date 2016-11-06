
  $(".dropdown-menu").on('click', 'li a', function(){
    var selText = $(this).children("span").html();

   $(this).parent('li').siblings().removeClass('active');
      $('#vl').val($(this).attr('data-value'));
    $(this).parents('.input-group-btn').find('.selection').html(selText);
    $(this).parents('li').addClass("active");
  });