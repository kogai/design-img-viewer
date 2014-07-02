$(window).load(function(){
		imgToCss()
		imgSrcSwitch()
});

function imgToCss(){
		var imgSrc = $("img").attr("src");
		var imgSrcHeight = $("img").height();
		$('a').css({
		    'background-image':'url('+imgSrc+')',
		    'height':imgSrcHeight+'px',
		});
		$('img').hide();
}

function imgSrcSwitch(){
	$('a').click(function(){
		$(this).removeAttr('style');
		var thisNum = Number($(this).children('img').attr('src').split(".png")[0].split("images/")[1]),
				nextNum = thisNum+1,
				switchNum = $(this).children('img').attr('src',$(this).children('img').attr('src').replace(thisNum,nextNum));
		$('img').load(function(){imgToCss()});
		imgError(switchNum,thisNum)
		return false;
	});
}

function imgError(nextNum,thisNum){
  nextNum.error(function() {
		$(this).parent("a").removeAttr('style');
		$(this).attr('src', $(this).attr("src").replace(thisNum,"1"));
		$('img').load(function(){imgToCss()});
  });
}

