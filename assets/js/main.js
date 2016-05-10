jQuery(document).ready(function($) {
  new Clipboard('.color');
});



$(function setcolorWord(){
  var $colorWord = $('.color-word');

  $('.color').mouseenter(function(){
    var color = $(this).css('background-color');
    $colorWord.css('color', color);
  });
  $('.color').mouseleave(function(){
    var color = $(this).css('background-color');
    $colorWord.css('color', '#222');
  });
})


$('.color').click(function(){
  var color = $(this).css('background-color');
  $this = $(this);
  
  
  $('<div class="blast" style="background-color:' + color + '" ></div>')
  .appendTo($this.parent())
  .delay(1500).queue(function() { $(this).remove(); });

});





