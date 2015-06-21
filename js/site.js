$(function() {
	
	$('.close, .modal-overlay').on('click', function(e) {
		e.preventDefault();
		
		if (e.target == document.getElementsByClassName('close')[0] ||
		    e.target == document.getElementsByClassName('modal-overlay')[0]) {
			$('.modal-overlay').fadeOut();
		}
	});
	
	$('.learnmore').on('click', function(e) {
		e.preventDefault();
		
		$('.modal-overlay').fadeIn();
	});
	
});
