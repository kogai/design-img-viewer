$(window).load(function(){
	console.log( imgMaxCount );
	imgToCss()
	imgSrcSwitch()
});

function imgToCss(){
	var $img 			= $("img");
	var imgSrc 			= $img.attr("src");
	var imgSrcHeight 	= $img.height();

	$('a').css({
	    'background-image': 'url(' + imgSrc + ')',
	    'height': imgSrcHeight + 'px',
		"width": $(window).width()
	});

	$img.hide();
}

function imgSrcSwitch(){
	var clickedCount 	= 1;
	var $a 				= $('a');

	$a.on( 'click', function( event ) {
		clickedCount++;

		if( clickedCount > imgMaxCount ){
			clickedCount = 1;
		}

		$img = $a.find( 'img' );

		$a.removeAttr('style');
		$img.show();

		$img.attr( 'src', 'images/' + clickedCount + '.png' );

		setTimeout( function(){
			imgToCss();
		}, 100 );


		return false;
	});
}
