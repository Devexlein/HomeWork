var btn = document.getElementById('btn');
btn.onclick = function (e) {
	e.preventDefault();
	alert ('Кнопка работает!');
	var text = document.querySelector('.title');
	text.classList.add('red');	
}

$(window).scroll(function() {
    $('.section-title').each(function(){
 	    var imagePos = $(this).offset().top;

 	    var topOfWindow = $(window).scrollTop();
 	    if (imagePos < topOfWindow+650) {
 	        $(this).addClass("fadeInLeftBig");
 	    }
 	});
});

$(window).scroll(function() {
 	$('#life .skill-title').each(function(){
 	    var imagePos = $(this).offset().top;

 	    var topOfWindow = $(window).scrollTop();
 	    if (imagePos < topOfWindow+650) {
 	        $(this).addClass("fadeInUp");
 	    }
 	});
});

$(window).scroll(function() {
 	$('#life .skill-text').each(function(){
 	    var imagePos = $(this).offset().top;

 	    var topOfWindow = $(window).scrollTop();
 	    if (imagePos < topOfWindow+650) {
 	        $(this).addClass("zoomIn");
 	    }
 	});
});
