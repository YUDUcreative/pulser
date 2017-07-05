$(document).ready(function(){

	var query = getUrlVars();

	if(query['image']){
		$('body').css('background-image', 'url(images/' + query['image'] + ')');
	}

	if(query['link']){
		$('body').on('click', function(){
			window.open(query['link'], '_blank');
		});
	}

	if( -1 !=  $.inArray(query['size'], [ 'small','medium','large' ])) {
		$('body').addClass(query['size']);
	} else {
		$('body').addClass('medium');
	}

	function getUrlVars(){
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++){
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
	    return vars;
	}

});


