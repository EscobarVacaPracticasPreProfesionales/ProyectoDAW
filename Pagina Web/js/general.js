// JavaScript Document
function activePage(){
	"use strict";
	$('.navbar ul a').each(function() {
		if ($(this).attr('href') === location.href.toString().split("/").slice(-1).pop()){
			$(this).addClass('active');
			return false;
		}
	});
}



$(document).ready(function(){
	"use strict";
	activePage();
});