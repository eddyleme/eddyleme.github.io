$(document).ready(function() {

	//resume button

	//resume button down animations
	$('#resume-button').on('mousedown', function() {
		event.preventDefault();
		this.style.borderBottom = '0px';
		this.style.borderRight = '0px';
		this.style.borderLeft = '2px solid black';
	})
	$('#resume-button').on('touchstart', function() {
		event.preventDefault();
		this.style.borderBottom = '0px';
		this.style.borderRight = '0px';
		this.style.borderLeft = '2px solid black';
	})

	//resume button up animations
	$('#resume-button').on('mouseup', function() {
		event.preventDefault();
		this.style.borderRight = 'black solid 10px';
		this.style.borderBottom = 'black solid 2px';
		this.style.borderTop = '0px';
		this.style.borderLeft = '0px';
	})
	$('#resume-button').on('touchend', function() {
		event.preventDefault();
		this.style.borderRight = 'black solid 10px';
		this.style.borderBottom = 'black solid 2px';
		this.style.borderTop = '0px';
		this.style.borderLeft = '0px';
	})



	//work button

	//work button down animations
	$('#work-button').on('mousedown', function() {
		event.preventDefault();
		this.style.borderBottom = '0px';
		this.style.borderRight = '0px';
		this.style.borderLeft = '2px solid black';
	})
	$('#work-button').on('touchstart', function() {
		event.preventDefault();
		this.style.borderBottom = '0px';
		this.style.borderRight = '0px';
		this.style.borderLeft = '2px solid black';
	})

	//work button up animations
	$('#work-button').on('mouseup', function() {
		event.preventDefault();
		this.style.borderRight = 'black solid 10px';
		this.style.borderBottom = 'black solid 2px';
		this.style.borderTop = '0px';
		this.style.borderLeft = '0px';
	})
	$('#work-button').on('touchend', function() {
		event.preventDefault();
		this.style.borderRight = 'black solid 10px';
		this.style.borderBottom = 'black solid 2px';
		this.style.borderTop = '0px';
		this.style.borderLeft = '0px';
	})

	//work button scrolling
	$('#work-button').on('click', function() {
		event.preventDefault();
		document.querySelector('.projects-page').scrollIntoView({ 
	  behavior: 'smooth'
		});
	});
	$('#work-button').on('touchend', function() {
		event.preventDefault();
		document.querySelector('.projects-page').scrollIntoView({ 
	  behavior: 'smooth'
		});
	});



	//visit me button

	//visit me button down animations
	$('.project-link').on('mousedown', function() {
		event.preventDefault();
		this.style.borderBottom = '0px'
		this.style.borderRight = '0px'
		this.style.borderLeft = '2px solid red'
	})
	$('.project-link').on('touchstart', function() {
		event.preventDefault();
		this.style.borderBottom = '0px'
		this.style.borderRight = '0px'
		this.style.borderLeft = '2px solid red'
	})

	//visit me button up animations
		$('.project-link').on('mouseup', function() {
		event.preventDefault();
		this.style.borderRight = 'red solid 2px'
		this.style.borderBottom = 'red solid 2px'
		this.style.borderTop = '0px'
		this.style.borderLeft = '0px'
	})
	$('.project-link').on('touchend', function() {
		event.preventDefault();
		this.style.borderRight = 'red solid 2px'
		this.style.borderBottom = 'red solid 2px'
		this.style.borderTop = '0px'
		this.style.borderLeft = '0px'
	})

});