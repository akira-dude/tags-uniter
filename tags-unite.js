$(document).ready(function(){

	// initialize by adding input
	$('.tags-unite').append('<input class="tu-write" type="text" placeholder="separate with enter...">');

	// check pressed button and if it's 'enter' create block with typed data + cleaning data in input
	$('.tu-write').on('keyup', function(e) {
		var code = e.keyCode || e.which;
		if(code == 13 && $(this).val().length >= 3){
			var data = $(this).val();
			$(this).val('');
			$('.tu-write').before('<span class="tu-text"><button class="tu-remove"></button><p>' + data + '</p></span>');
		}
	});

	// remove wanted block by clicking on 'remove' button
	$('.tags-unite').on('mousedown', function() {
		$('.tu-remove').on('mouseup', function() {
			$(this).parent().remove();
		});
	});

	// saving data in other block like inline text without unnecessary tags
	$('.modal-save').click(function(){
		var mass = [];
		$('.selector-text p').each(function(index){
			mass.push(' ' + $(this).html());
		});
	});

});