// Check off Specific Todos By Clicking
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
	//if li is grey
	// if ($(this).css('color') === 'rgb(128, 128, 128)') {
	// 	//turn it black
	// 	$(this).css({
	// 		color: 'black',
	// 		textDecoration: 'none'
	// 	});
	// } else {
	// 	//turn it grey
	// 	$(this).css({
	// 		color: 'grey',
	// 		textDecoration: 'line-through'
	// 	});
	// }
});

//click on X to delete Todo
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on('keypress', function(event) {
	if (event.which === 13) {
		// grabbing new todo text from input
		let todoText = $(this).val();
		$(this).val('');
		// create new li and add to ul
		$('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
	}
});

$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle();
});
