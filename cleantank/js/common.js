$(document).ready(function(){
    $(".autohide").click(function(){
        $(".collapse").collapse('hide');
    });
    
    var img = document.getElementById("smlogo");
    if ($(window).width() < 336) {
    	img.src = "img/logo.png"
    }

    $(window).resize(function() {
    if ($(window).width() < 336) {
    	img.src = "img/logo.png";
    } else {
    	img.src = "img/smlogo.png"
    }
	});
});