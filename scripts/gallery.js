$(document).on("click",".pageOverlay",function() {
  $('.imageActive').remove();
  $('.imageCaption').hide();
  $(this).toggle();
});
$(document).on("click",".gallery div img",function() {
  $('.pageOverlay').toggle();
  $(this).clone().appendTo('body').toggleClass('imageActive');
  $('.imageCaption').show();
  var currentCaption = $('.imageActive').attr('title');
  $('.imageCaption').html(currentCaption);
});