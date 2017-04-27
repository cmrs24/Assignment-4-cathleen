$(document).ready(function(){


$(".hide").hide();
$(".readmore").click(showreadmore);
$(".readless").click(hidereadmore);

function showreadmore(e){
	e.preventDefault();
	$(".hide").slideDown();
	$(".readmore").hide();
}

function hidereadmore(e){
	e.preventDefault();
	$(".hide").slideUp();
	$(".readmore").show();
}


$(".learnmore").click(showlearnmore);
$(".learnless").click(hidelearnmore);


function showlearnmore(e){
	e.preventDefault();
	$(".hide").slideDown();
	$(".learnmore").hide();
}

function hidelearnmore(e){
	e.preventDefault();
	$(".hide").slideUp();
	$(".learnmore").show();
}

});