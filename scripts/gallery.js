$(document).on("click",".pageOverlay",function() {
  $(this).toggle();
  $('.imageActive').toggleClass('imageActive');
});
$(document).on("click",".gallery div img",function() {
  $(this).clone().appendTo('body').toggleClass('imageActive');
  $('.pageOverlay').toggle();
})