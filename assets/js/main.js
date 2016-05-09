jQuery(document).ready(function($) {
  
});

$(function setColourWord(){
  var $colourWord = $('.colour-word');

  $('.colour').mouseenter(function(){
    var colour = $(this).css('background-color');
    $colourWord.css('color', colour);
  });
  $('.colour').mouseleave(function(){
    var colour = $(this).css('background-color');
    $colourWord.css('color', '#222');
  });
})


$('.colour').click(function(){
	var colour = $(this).css('background-color');
	$this = $(this);

	// $this.parent().append('<div class="blast" style="background-color:' + colour + '" ></div>').delay(1200).remove($(this));
  $('<div class="blast" style="background-color:' + colour + '" ></div>').appendTo($this.parent())
  .delay(1500).queue(function() { $(this).remove(); });

});





